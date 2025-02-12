const axios = require("axios");
const { response } = require("express");

const getCostEstimate = async (location, examType) => {
  // Call the API from OpenAI
  try {
    const openAiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions", // URL correta da OpenAI
      {
        model: "gpt-3.5-turbo", // Usando o modelo correto
        messages: [
          {
            role: "system",
            content:
              "You are an assistant that provides estimations of the cost of a medical exam.",
          },
          {
            role: "user",
            content: `I need to know the cost and waiting time of a ${examType} exam in ${location}.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`, // Substitua YOUR_API_KEY pela sua chave da API
        },
      }
    );

    // Extract data from the response
    const responseMessage = openAiResponse.data.choises[0].message.content;

    return responseMessage;
  } catch (error) {
    throw new Error("Error obtaining the API");
  }
};

module.exports = { getCostEstimate };
