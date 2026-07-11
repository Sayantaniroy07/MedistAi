// import { GoogleGenAI } from "@google/genai";
import fs from "fs";
export const analyzePrescription = async (
  imagePath,
  mimeType = "image/jpeg"
) => {
  try {
    console.log("========== GEMINI REQUEST ==========");
    console.log("IMAGE PATH:", imagePath);
    console.log("MIME TYPE:", mimeType);

    if (!fs.existsSync(imagePath)) {
      throw new Error(`File not found: ${imagePath}`);
    }

    const imageData = fs.readFileSync(imagePath).toString("base64");

   const prompt = `
You are a medical AI assistant.

Analyze the uploaded prescription image and extract the medical information.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT use code fences.
4. Do NOT write explanations.
5. Do NOT write any text before or after the JSON.
6. If information is not visible, use an empty string "" or an empty array [].
7. specialization must be the most appropriate doctor specialty.

Return this exact JSON structure:

{
  "disease": "",
  "specialization": "",
  "confidence": 0,
  "symptoms": [],
  "medicines": []
}

Specialization examples:

Sinusitis -> ENT Specialist
Acne -> Dermatologist
Heart Disease -> Cardiologist
Migraine -> Neurologist
Diabetes -> Endocrinologist
Eye Infection -> Ophthalmologist
Fever -> General Physician
Cold and Cough -> General Physician
Joint Pain -> Orthopedic

Example output:

{
  "disease": "Hypoglycemia",
  "specialization": "General Physician",
  "confidence": 92,
  "symptoms": ["Giddiness", "Restlessness"],
  "medicines": ["Dextrose 5% IV", "ORS"]
}

Return JSON only.
`;

    let data = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      console.log(`Gemini Attempt ${attempt}/3`);

      const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                  {
                    inline_data: {
                      mime_type: mimeType,
                      data: imageData,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

      data = await response.json();

      console.log("========== GEMINI RESPONSE ==========");
      console.log(JSON.stringify(data, null, 2));

      if (response.ok && data.candidates) {
        return data.candidates[0].content.parts[0].text;
      }

      if (
        data?.error?.code === 503 &&
        attempt < 3
      ) {
        console.log(
          "Gemini busy. Waiting 2 seconds before retry..."
        );

        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );

        continue;
      }

      throw new Error(JSON.stringify(data));
    }

    throw new Error("No response from Gemini");
  } catch (error) {
    console.log("========== GEMINI ERROR ==========");
    console.error(error);

    if (error?.message) {
      console.error("ERROR MESSAGE:", error.message);
    }

    throw error;
  }
};