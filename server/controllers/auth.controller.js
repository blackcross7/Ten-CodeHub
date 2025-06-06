const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/utils.js');


const signup = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }

        //Checking if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        } 

        //comparing password and confirmPassword
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        //Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create new user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        if (newUser) {
            //JWT Token
            generateToken(newUser._id, res);
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                // token: generateToken(newUser._id, res)
            });
        } else {
            return res.status(400).json({ message: "User not created! Invalid Credentials." });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        User.findOne({ email })
            .then(async (user) => {
                if (!user) {
                    return res.status(400).json({ message: "User not found" });
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(400).json({ message: "Invalid credentials" });
                }
                generateToken(user._id, res);
                return res.status(200).json({
                    _id: user._id,
                    fullName: user.fullName, 
                    email: user.email,
                    // token: generateToken(user._id, res)
                });
            })

    } catch (error) {
        return res.status(500).json({ message: "Server error!" });
    }
};


const logout =  (req, res) => {
    try {
        res.clearCookie("jwt", {path: "/"});
        return res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Server error!" });
    }
};

const updateProfile = async (req, res) => {
    const { fullName, jobTitle, location, bio, github, linkedin, twitter } = req.body;

    try {
        const userId = req.user._id; // assuming you have middleware to set req.user
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Update the user's profile details
        user.fullName = fullName || user.fullName;
        user.jobTitle = jobTitle || user.jobTitle;
        user.location = location || user.location;
        user.bio = bio || user.bio;
        user.socialLinks.github = github || user.socialLinks.github;
        user.socialLinks.linkedin = linkedin || user.socialLinks.linkedin;
        user.socialLinks.twitter = twitter || user.socialLinks.twitter;

        // Save the updated user
        await user.save();

        return res.status(200).json({
            message: "Profile updated successfully",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                jobTitle: user.jobTitle,
                location: user.location,
                bio: user.bio,
                socialLinks: user.socialLinks
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const checkAuth = async (req, res) => {
   try{
    res.status(200).json(req.user);
   }catch(error){
    console.log(error)
    return res.status(500).json({ message: "Server error!" });
   }
};



module.exports = {
    signup,
    login,
    logout,
    updateProfile,
    checkAuth
};