import "dotenv/config";
import express from "express";
import prisma from "../config/db.js";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "WhoseShare API",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`WhoseShare API running on port ${PORT}`);
});
