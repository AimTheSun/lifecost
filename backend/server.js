const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "config.env") });

const express = require("express");

const app = express();
const port = 5000;

const examController = require("./controllers/exameController");

// Set up the Express app to handle CORS requests - Assim consigo acessar a API do servidor com React e Node
const cors = require("cors");
app.use(cors()); // This will Enable CORS for all requests

app.use(express.json()); // To read the data from the request body (from the json)

app.post("/api/estimate-cost", examController.estimateCost); // This will call the Controller

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
