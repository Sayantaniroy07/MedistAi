import { exec } from "child_process";

export const uploadChatPDF = async (
  req,
  res
) => {
  try {
    const filePath = req.file.path;

    console.log("PDF:", filePath);

    exec(
      "python python-rag/create_memory_for_llm.py",
      (error, stdout, stderr) => {

        if (error) {
          console.log(error);

          return res.status(500).json({
            success: false,
          });
        }

        return res.json({
          success: true,
          message:
            "PDF indexed successfully",
        });
      }
    );

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
    });
  }
};