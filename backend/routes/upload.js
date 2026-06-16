import express from "express";
import multer from "multer";
import { uploadPrescription } from "../controllers/uploadController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/prescription",
  upload.any(), // <-- UPDATE: Accepts any fields/files dynamically
  uploadPrescription
);

export default router;


// import express from "express";
// import multer from "multer";
// import { uploadPrescription } from "../controllers/uploadController.js";

// const router = express.Router();

// const upload = multer({
//   dest: "uploads/",
// });

// router.post(
//   "/prescription",
//   upload.single("prescription"), // Matches what your frontend is likely sending
//   uploadPrescription
// );

// export default router;