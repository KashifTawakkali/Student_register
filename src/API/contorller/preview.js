import axiosInstance from "../Interdeptor/Interceptor";

// GET call to fetch document data by email
export const getPreview = async (email) => {
  try {
    // Ensure the correct URL format is used
    const response = await axiosInstance.get(`/combined-data/${email}`);
    return response.data; // Assuming response data contains the data object
  } catch (error) {
    throw error; // Propagate the error for handling elsewhere
  }
};
