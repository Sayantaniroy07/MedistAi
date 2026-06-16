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

  res.json(doctors);
};