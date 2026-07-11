import { findDoctors } from "../services/ragService.js";

export const getRecommendedDoctors = (
  req,
  res
) => {
  const { disease, city } = req.body;

  const doctors = findDoctors(
    disease,
    city
  );
console.log("LAT:", lat);
console.log("LNG:", lng);
console.log("SPECIALIZATION:", analysis.specialization);
  res.json(doctors);
};