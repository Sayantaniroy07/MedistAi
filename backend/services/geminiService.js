import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

// UPDATE: Added mimeType parameter with a default fallback
export const analyzePrescription = async (
  imagePath,
  mimeType = "image/jpeg" 
) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const image = {
    inlineData: {
      data: fs
        .readFileSync(imagePath)
        .toString("base64"),
      mimeType: mimeType, // UPDATE: Use the dynamic mimeType here
    },
  };

  const prompt = `
You are a medical AI assistant.

Analyze this prescription image.

Return ONLY valid JSON.

{
  "disease":"",
  "specialization":"",
  "symptoms":[],
  "medicines":[]
}

Examples:

Sinusitis -> ENT
Acne -> Dermatologist
Heart Disease -> Cardiologist
Migraine -> Neurologist
Diabetes -> Endocrinologist
Eye Infection -> Ophthalmologist

Do not return markdown.
Do not return explanations.
Return JSON only.
`;

  const result = await model.generateContent([
    prompt,
    image,
  ]);

  return result.response.text();
};








// import { GoogleGenerativeAI } from "@google/generative-ai";
// import fs from "fs";

// const genAI = new GoogleGenerativeAI(
//   process.env.GEMINI_API_KEY
// );

// export const analyzePrescription = async (
//   imagePath
// ) => {
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });

//   const image = {
//     inlineData: {
//       data: fs
//         .readFileSync(imagePath)
//         .toString("base64"),
//       mimeType: "image/jpeg",
//     },
//   };

//   const prompt = `
// You are a medical AI assistant.

// Analyze this prescription image.

// Return ONLY valid JSON.

// {
//   "disease":"",
//   "specialization":"",
//   "symptoms":[],
//   "medicines":[]
// }

// Examples:

// Sinusitis -> ENT
// Acne -> Dermatologist
// Heart Disease -> Cardiologist
// Migraine -> Neurologist
// Diabetes -> Endocrinologist
// Eye Infection -> Ophthalmologist

// Do not return markdown.
// Do not return explanations.
// Return JSON only.
// `;

//   const result = await model.generateContent([
//     prompt,
//     image,
//   ]);

//   return result.response.text();
// };