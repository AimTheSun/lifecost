import axios from "axios";

export const getEstimateCost = async (location, examType) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/estimate-cost",
      { location, examType }
    );

    console.log("Backend response:", response.data); // <-- Aqui!
    return response.data;
  } catch (error) {
    console.error("Error fetching estimate cost:", error);
    throw new Error("Error fetching estimate cost");
  }
};
