import { findDoctorsBySpecialization } from "../services/doctorService.js";

export const getRecommendedDoctors = (
  req,
  res
) => {
  try {
    const { specialty } = req.body;

    const doctors =
      findDoctorsBySpecialization(
        specialty
      );

    return res.json({
      success: true,
      doctors,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};