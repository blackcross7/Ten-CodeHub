import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../utils/axios';
import toast from 'react-hot-toast';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isCheckingAuth: true,
      isUpdatingProfile: false,
      error: null,

      checkAuth: async () => {
        try {
          const res = await axiosInstance.get("/auth/check");
          set({
            user: res.status === 200 ? res.data : null,
          });
          
        } catch (error) {
          console.error("Error checking auth:", error);
          set({ user: null, isCheckingAuth: false });
        } finally {
          set({ isCheckingAuth: false });
        }
      },

      signup: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axiosInstance.post('/auth/signup', userData);
          set({ user: response.data, isLoading: false });
          return response.data;
        } catch (error) {
          set({
            error: error.response?.data?.message || 'An error occurred during signup',
            isLoading: false
          });
          throw error;
        }
      },

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axiosInstance.post('/auth/login', credentials);
          set({ user: response.data, isLoading: false });
          return response.data;
        } catch (error) {
          set({
            error: error.response?.data?.message || 'An error occurred during login',
            isLoading: false
          });
          throw error;
        }
      },

      updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
          const res = await axiosInstance.put("/auth/update", data);
          set({ user: res.data });
          toast.success("Profile updated successfully!");
          return true;
        } catch (error) {
          console.error("Error updating profile:", error);
          toast.error(error?.response?.data?.message || "Profile update failed");
          return false;
        } finally {
          set({ isUpdatingProfile: false });
        }
      },

      logout: async () => {
        try {
          await axiosInstance.post('/auth/logout');
          set({ user: null, error: null });
        } catch (error) {
          set({
            error: error.response?.data?.message || 'An error occurred during logout'
          });
          throw error;
        }
      },

      clearError: () => set({ error: null })
    }),
    {
      name: 'auth-store', // key to store in localStorage
      partialize: (state) => ({ user: state.user }), // only persist 'user'
    }
  )
);

export default useAuthStore;
