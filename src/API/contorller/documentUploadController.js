// src/API/controller/personalController.js
import axiosInstance from "../Interdeptor/Interceptor";

export const submitDocument = async (formData) => {
  try {
    const response = await axiosInstance.post('uploads', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
