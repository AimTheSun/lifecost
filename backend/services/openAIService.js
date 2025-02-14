require("dotenv").config(); // Certifique-se de carregar variáveis do .env
console.log("API Key:", process.env.OPENAI_API_KEY);

const axios = require("axios");

const getCostEstimate = async (location, examType) => {
  try {
    const openAiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
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
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Usa a variável de ambiente
          "Content-Type": "application/json", // Adiciona o Content-Type correto
        },
      }
    );

    return openAiResponse.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Erro ao obter estimativa de custo:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Erro ao obter estimativa de custo");
  }
};

module.exports = { getCostEstimate };
