import doctors from "../data/doctors.js";

export const findDoctorsBySpecialization = (specialty) => {
  console.log("Searching for:", specialty);

  if (!specialty) {
    return [];
  }

  const matches = [];

  for (const doctor of doctors) {
    console.log(doctor);

    if (!doctor.specialty) {
      console.log("❌ Missing specialty:", doctor);
      continue;
    }

    if (
      doctor.specialty.trim().toLowerCase() ===
      specialty.trim().toLowerCase()
    ) {
      matches.push(doctor);
    }
  }

  return matches;
};

export const findDoctorById = (id) =>
  doctors.find((d) => d.id === Number(id));