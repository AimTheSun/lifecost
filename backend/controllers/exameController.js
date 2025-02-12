// Call for the openAIService.js
const openAiService = require("../services/openAIService");

// Controller to get the estimated price
const estimateCost = async (req, res) => {
  const { location, examType } = req.body;

  try {
    const result = await openAiService.getCostEstimate(location, examType);

    // Send the result back to the client
    res.json({ message: result });
  } catch (error) {
    console.error("Can not obtain the estimated price", error);
    res.status(500).json({ message: "Error calculating the estimated price" });
  }
};

module.exports = {
  estimateCost,
};
