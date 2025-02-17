const axios = require("axios");

const fetchHospitalsFromGooglePlaces = async (location) => {
  const googleApiKey = process.env.GOOGLE_API_KEY;
  const googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+${location}&key=${googleApiKey}`;

  try {
    const response = await axios.get(googlePlacesUrl);
    console.log("Google Places Response:", response.data); // Debugging log

    // Limit the results to a maximum of 4 hospitals/clinics
    const hospitals = response.data.results.slice(0, 4).map((hospital) => ({
      name: hospital.name,
      address: hospital.formatted_address,
      rating: hospital.rating || "No rating available", // Retained the rating
      source: "Google Places", // Added source info
    }));

    return hospitals;
  } catch (error) {
    console.error("Error fetching data from Google Places:", error);
    return [];
  }
};

module.exports = { fetchHospitalsFromGooglePlaces };
