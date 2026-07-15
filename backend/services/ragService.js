import fs from "fs";

const doctors = JSON.parse(
  fs.readFileSync(
    new URL("../data/doctors.json", import.meta.url)
  )
);

export const findDoctors = (disease, city) => {
  let specialty = "";

  if (disease.toLowerCase().includes("sinus")) {
    specialty = "ENT";
  }

  if (disease.toLowerCase().includes("heart")) {
    specialty = "Cardiologist";
  }

  return doctors.filter(
    (doctor) =>
      doctor.specialty === specialty &&
      doctor.city === city
  );
};