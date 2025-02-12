// I will comment to know my knowledge 

const express = require('express');
const app = express();
const axios = require('axios');
const port = 5000;

// Set up the Express app to handle CORS requests - Assim consigo acessar a API do servidor com React e Node
const cors = require('cors');
app.use(cors());

app.use(express.json()); // For the express can read the data from the request body (from the json)

app.post ('/api/estimate-cost', async (req, res) => {
    const {location, examType} = req.body;


    // Call the API from OpenAI
    try {
        const openAiResponse = await axios.post('http://localhost:5000/estimate-cost', {
            model: 'gtp-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are an assistent that give estimations of the cost of a medical exam.',
                },
                {
                    role: 'user',
                    content: `I need to know the cost and waiting time of a ${examType} exam in ${location}.`,
                },
            ],
            }, {
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
            },
            });
            
            // Extract data from the response
            const data = openAiResponse.data.choises[0].message.content;

            //Send data to frontend
            res.json({message:data});
            } catch (error) {
                console.error('Error obtaining the API:', error);
                res.status(500).json({message: 'Error obtaining the API'});
            }
        });

        



}
