require("dotenv").config();
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
              "You are an assistant that provides estimations of the cost of a medical exam. Always respond with a JSON object.",
          },
          {
            role: "user",
            content: `I need to know the estimated price range, waiting time, and available hospitals for a ${examType} exam in ${location}. Return the response in valid JSON format with this structure:
            {
              "priceRange": "value",
              "waitingTime": "value",
              "hospitals": [
                {
                  "name": "Hospital Name",
                  "address": "Hospital Address",
                  "phone": "Hospital Contact"
                }
              ]
            }`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let responseText = openAiResponse.data.choices[0].message.content.trim();

    // **Se houver formatação de bloco de código, removemos**
    if (responseText.startsWith("```json")) {
      responseText = responseText.replace(/```json|```/g, "").trim();
    }

    // **Converte a string para JSON**
    try {
      const parsedResponse = JSON.parse(responseText);
      console.log("Parsed OpenAI response:", parsedResponse); // <-- LOG AQUI
      return parsedResponse;
    } catch (error) {
      console.error("Error parsing OpenAI response:", responseText);
      throw new Error("Invalid JSON format from OpenAI");
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
  }
};

module.exports = { getCostEstimate };
