// Create Doctor Search Service
import axios from "axios";

export const findNearbyDoctors = async (
  lat,
  lng,
  specialization
) => {
  console.log(
    "GOOGLE MAPS KEY:",
    process.env.GOOGLE_MAPS_API_KEY
  );

  console.log(
    "Searching:",
    specialization,
    lat,
    lng
  );

  const radius = 10000;

  const keyword = `${specialization} doctor`;

  const url =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json` +
    `?location=${lat},${lng}` +
    `&radius=${radius}` +
    `&keyword=${encodeURIComponent(keyword)}` +
    `&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  const response = await axios.get(url);

  // console.log(
  //   "Google Places Status:",
  //   response.data.status
  // );
  console.log("FULL GOOGLE RESPONSE:");
console.log(
  JSON.stringify(response.data, null, 2)
);

  console.log(
    "Doctors Found:",
    response.data.results?.length
  );

  return response.data.results;
};