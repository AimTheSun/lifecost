import axios from "axios";

export const getEstimateCost = async (location, examType) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/estimate-cost`,
      { location, examType }
    );
    console.log("Backend response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching estimate cost:", error);
    throw new Error("Error fetching estimate cost");
  }
};
