import axios from "axios";

const API_URL = "http://localhost:5000/api/estimate-cost"; //URL do backend

export const getEstimateCost = async (location, examType) => {
  try {
    const response = await axios.post(API_URL, {
      location,
      examType,
    });
    return response.data.message; // Retorn message from the API
  } catch (error) {
    throw new Error("Error fetching estimate cost");
  }
};
