// src/API/controller/personalController.js
import axiosInstance from "../Interdeptor/Interceptor";

export const submitAcademicsData = async (formData) => {
  try {
    const response = await axiosInstance.post('academics-data', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
