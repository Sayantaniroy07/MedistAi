import express from "express";
import axios from "axios";
import Chat from "../models/chat.js";

const router = express.Router();


// =========================
// SEND MESSAGE TO RAG
// =========================

router.post("/", async (req, res) => {
  try {
    const { message, chatId, userId } = req.body;

    const ragResponse = await axios.post(
      "http://127.0.0.1:8000/chat",
      {
        message,
      }
    );

    const answer = ragResponse.data.answer;

    let chat;

    if (chatId) {
      chat = await Chat.findById(chatId);

      chat.messages.push({
        role: "user",
        content: message,
      });

      chat.messages.push({
        role: "assistant",
        content: answer,
      });

      await chat.save();
    } else {
      chat = await Chat.create({
        userId: userId || "guest",

        title:
          message.length > 50
            ? message.substring(0, 50)
            : message,

        messages: [
          {
            role: "user",
            content: message,
          },
          {
            role: "assistant",
            content: answer,
          },
        ],
      });
    }

    res.json({
      answer,
      chatId: chat._id,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to get response from RAG service",
    });
  }
});


// =========================
// GET ALL CHATS
// =========================

router.get("/history/:userId", async (req, res) => {
  try {
    const chats = await Chat.find({
      userId: req.params.userId,
    }).sort({
      updatedAt: -1,
    });

    res.json(chats);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// =========================
// GET SINGLE CHAT
// =========================

router.get("/:chatId", async (req, res) => {
  try {
    const chat = await Chat.findById(
      req.params.chatId
    );

    res.json(chat);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// =========================
// DELETE CHAT
// =========================

router.delete("/:chatId", async (req, res) => {
  try {
    await Chat.findByIdAndDelete(
      req.params.chatId
    );

    res.json({
      success: true,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// =========================
// RENAME CHAT
// =========================

router.put("/:chatId", async (req, res) => {
  try {
    const chat = await Chat.findByIdAndUpdate(
      req.params.chatId,
      {
        title: req.body.title,
      },
      {
        new: true,
      }
    );

    res.json(chat);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// =========================
// SEARCH CHATS
// =========================

router.get(
  "/search/:userId/:query",
  async (req, res) => {
    try {
      const chats = await Chat.find({
        userId: req.params.userId,
        title: {
          $regex: req.params.query,
          $options: "i",
        },
      });

      res.json(chats);

    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
);

export default router;