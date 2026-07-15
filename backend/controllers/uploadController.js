import { analyzePrescription } from "../services/geminiService.js";
import { findDoctorsBySpecialization } from "../services/doctorService.js";

export const uploadPrescription = async (req, res) => {
  try {
    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    // Analyze prescription using Gemini
    let analysisText = await analyzePrescription(
      uploadedFile.path,
      uploadedFile.mimetype
    );

    // Remove markdown if Gemini returns ```json ... ```
    analysisText = analysisText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let analysis;

    try {
      analysis = JSON.parse(analysisText);
      console.log("========== GEMINI RESPONSE ==========");
console.log(JSON.stringify(analysis, null, 2));
    } catch (err) {
      console.error("Gemini JSON Parse Error:", analysisText);

      return res.status(500).json({
        success: false,
        message: "Invalid JSON returned by Gemini.",
      });
    }

    // Find doctors from local doctors.js / doctors.json
    const doctors = findDoctorsBySpecialization(
    analysis.specialty
);
    console.log("Analysis:", analysis);
console.log("Specialization:", analysis.specialization);
    return res.json({
    success: true,
    disease: analysis.disease,
    specialty: analysis.specialty,
    confidence: analysis.confidence,
    symptoms: analysis.symptoms || [],
    medicines: analysis.medicines || [],
    doctors,
});
console.log("========== ANALYSIS ==========");
console.log(analysis);

console.log("Searching specialization:");
console.log(analysis.specialization);
  } catch (error) {
    console.error("Upload Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const uploadChatPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

    return res.json({
      success: true,
      file: req.file.filename,
      path: req.file.path,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};