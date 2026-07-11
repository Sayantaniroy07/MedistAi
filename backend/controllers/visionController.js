import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import Groq from "groq-sdk";
console.log("GROQ:", process.env.GROQ_API_KEY);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
  
});

export const analyzeImage = async (
  req,
  res
) => {
  try {
    const image = req.file;

    if (!image) {
      return res.status(400).json({
        result: "No image uploaded",
      });
    }

    const imageBuffer =
      fs.readFileSync(image.path);

    const base64Image =
      imageBuffer.toString("base64");

    const completion =
      await groq.chat.completions.create({
       model:
"meta-llama/llama-4-scout-17b-16e-instruct",

        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text:
                  "You are a medical assistant. Analyze this image and describe possible medical findings. Mention that this is not a diagnosis.",
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${image.mimetype};base64,${base64Image}`,
                },
              },
            ],
          },
        ],
      });

    const answer =
      completion.choices[0].message.content;

    fs.unlinkSync(image.path);

    res.json({
      result: answer,
    });
  } catch (error) {
  console.error("VISION ERROR:");
  console.error(error);

  res.status(500).json({
    result: error.message,
  });
}
};