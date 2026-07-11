// controllers/chatbotUploadController.js

export const uploadChatPDF = async (
  req,
  res
) => {
  try {
    const pdfPath = req.file.path;

    console.log("PDF Uploaded:", pdfPath);

    // Later:
    // Call Python RAG here

    res.json({
      success: true,
      filePath: pdfPath,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};