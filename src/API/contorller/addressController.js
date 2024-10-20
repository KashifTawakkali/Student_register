// src/API/controller/personalController.js
import axiosInstance from "../Interdeptor/Interceptor";

export const submitAddressData = async (formData) => {
  try {
    const response = await axiosInstance.post('address-data', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
