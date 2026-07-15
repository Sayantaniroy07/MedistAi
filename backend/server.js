import express from "express";
import cors from "cors";
import visionRoutes from "./routes/visionRoutes.js";
import uploadRoutes from "./routes/upload.js";
import doctorRoutes from "./routes/doctors.js";
import chatRoutes from "./routes/chatRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://medist-ai.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/doctors", doctorRoutes);
app.use(
  "/api/vision",
  visionRoutes
);
app.get("/test", (req, res) => {
  res.send("Server OK");
});

app.get("/", (req, res) => {
  res.send("MedistAI Backend is Running 🚀");
});

// app.listen(5000, () => {
//   console.log("Server Running on Port 5000");
//   console.log("Gemini Key:", process.env.GEMINI_API_KEY);
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});