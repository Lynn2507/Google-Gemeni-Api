/*
https://ai.google.dev/tutorials/node_quickstart

*/

const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({model: "gemini-pro"});

    const prompt = "What top 5 jobs will mostly likely be replaced by AI in 2030?"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text)
}

run();