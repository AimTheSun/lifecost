require("dotenv").config();
const axios = require("axios");
const { fetchHospitalsFromGooglePlaces } = require("./hospitalGoogle");

const getCostEstimate = async (location, examType) => {
  try {
    // Fetch hospital data from Google Places
    const hospitals = await fetchHospitalsFromGooglePlaces(location);

    // Fetch estimated cost and waiting time from OpenAI
    const openAiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o", // Make sure to use the correct OpenAI model
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
                  "rating": "Hospital Rating"
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

    // If there is code block formatting, we remove it
    if (responseText.startsWith("```json")) {
      responseText = responseText.replace(/```json|```/g, "").trim();
    }

    // Parse OpenAI's response to JSON
    try {
      const parsedResponse = JSON.parse(responseText);
      console.log("Parsed OpenAI response:", parsedResponse); // Debug log

      // Combine OpenAI data with the hospitals fetched from Google Places
      parsedResponse.hospitals = hospitals;

      // Return the final combined response in the same structure
      return parsedResponse;
    } catch (error) {
      console.error("Error parsing OpenAI response:", responseText);
      throw new Error("Invalid JSON format from OpenAI");
    }
  } catch (error) {
    console.error("Error calling OpenAI or Google Places APIs:", error);

    // Return default structure in case of any errors
    return {
      priceRange: "No data available",
      waitingTime: "No data available",
      hospitals: [],
    };
  }
};

module.exports = { getCostEstimate };
