// src/API/controller/personalController.js
import axiosInstance from "../Interdeptor/Interceptor";

export const submitCountryEngData = async (formData) => {
  try {
    const response = await axiosInstance.post('education-data', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
