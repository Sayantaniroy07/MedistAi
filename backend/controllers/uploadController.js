import { analyzePrescription } from "../services/geminiService.js";
import { findNearbyDoctors } from "../services/googlePlacesService.js";

export const uploadPrescription = async (
  req,
  res
) => {
  try {
    // UPDATE: Look for files in the array
    const uploadedFile = req.files && req.files[0];

    if (!uploadedFile) {
      return res.status(400).json({
        message: "No file received",
      });
    }

    const { lat, lng } = req.body;

    // UPDATE: Use uploadedFile instead of req.file
    const analysisText = await analyzePrescription(
      uploadedFile.path,
      uploadedFile.mimetype 
    );

    const analysis = JSON.parse(analysisText);

    const doctors =
      await findNearbyDoctors(
        lat,
        lng,
        analysis.specialization
      );

    res.json({
      disease: analysis.disease,
      specialization:
        analysis.specialization,
      symptoms: analysis.symptoms,
      medicines: analysis.medicines,
      doctors,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};