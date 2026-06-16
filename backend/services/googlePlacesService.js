// Create Doctor Search Service
import axios from "axios";

export const findNearbyDoctors = async (
  lat,
  lng,
  specialization
) => {
  const radius = 10000;

  const keyword = `${specialization} doctor`;

  const url =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json` +
    `?location=${lat},${lng}` +
    `&radius=${radius}` +
    `&keyword=${encodeURIComponent(keyword)}` +
    `&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  const response = await axios.get(url);

  return response.data.results;
};