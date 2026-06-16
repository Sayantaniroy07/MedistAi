import express from "express";
import cors from "cors";

import uploadRoutes from "./routes/upload.js";
import doctorRoutes from "./routes/doctors.js";
// import chatRoutes from "./routes/chatRoutes.js";

import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/api/chat", chatRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/doctors", doctorRoutes);
app.get("/test", (req, res) => {
  res.send("Server OK");
});
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
  console.log("Gemini Key:", process.env.GEMINI_API_KEY);
});