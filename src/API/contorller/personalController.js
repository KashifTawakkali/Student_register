// src/API/controller/personalController.js
import axiosInstance from "../Interdeptor/Interceptor";

export const submitPersonalData = async (formData) => {
  try {
    const response = await axiosInstance.post('personal-data', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
