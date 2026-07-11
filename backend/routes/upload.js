import express from "express";
import multer from "multer";
import { uploadPrescription } from "../controllers/uploadController.js";
import {
  uploadChatPDF,
} from "../controllers/uploadController.js";
const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/prescription",
  upload.single("file"),
  uploadPrescription
);
// NEW Chatbot Upload
router.post(
  "/chatbot",
  upload.single("file"),
  (req, res) => {
    res.json({
      success: true,
      file: req.file,
    });
  }
);
router.post(
  "/chat-pdf",
  upload.single("file"),
  uploadChatPDF
);
export default router;


