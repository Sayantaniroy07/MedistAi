import fs from "fs";

const doctors = JSON.parse(
  fs.readFileSync(
    new URL("../data/doctors.json", import.meta.url)
  )
);

export const findDoctors = (disease, city) => {
  let specialization = "";

  if (disease.toLowerCase().includes("sinus")) {
    specialization = "ENT";
  }

  if (disease.toLowerCase().includes("heart")) {
    specialization = "Cardiologist";
  }

  return doctors.filter(
    (doctor) =>
      doctor.specialization === specialization &&
      doctor.city === city
  );
};