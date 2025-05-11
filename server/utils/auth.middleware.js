const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Not authorized, user not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

module.exports = protectRoute;
