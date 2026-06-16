import Tesseract from "tesseract.js";

export const extractTextFromImage = async (imagePath) => {
  try {
    const { data } = await Tesseract.recognize(
      imagePath,
      "eng"
    );

    return data.text;
  } catch (error) {
    console.error(error);
    throw error;
  }
};