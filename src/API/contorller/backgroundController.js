// src/API/controller/personalController.js
import axiosInstance from "../Interdeptor/Interceptor";

export const submitVissData = async (formData) => {
  try {
    const response = await axiosInstance.post('visa-status', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
