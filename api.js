/*
https://ai.google.dev/tutorials/node_quickstart
*/

/*
(1)
This sections is "gemini-pro" - Generate text from text-only input
https://ai.google.dev/tutorials/node_quickstart#generate-text-from-text-input
*/
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require('dotenv').config();

// // Access your API key as an environment variable
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {

//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({model: "gemini-pro"});

//     const prompt = "What is the top 5 jobs that will most likely be replaced by AI in 2030？"

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text)
// }

// run();


/*
(2)
This sections is "gemini-pro-vision" - Generate text from text-only input
https://ai.google.dev/tutorials/node_quickstart#generate-text-from-text-and-image-input
*/

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
require('dotenv').config();

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

async function run() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  
    const prompt = "What's different between these pictures?";
  
    const imageParts = [
      fileToGenerativePart("./assets/harry potter.jpeg", "image/jpeg"),
      fileToGenerativePart("./assets/dog.jpeg", "image/jpeg"),
    ];
  
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();