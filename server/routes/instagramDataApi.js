import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises"; // 1. ADDED: Import the promise-based file system

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// 2. ADDED 'async' before (req, res)
router.get("/", async (req, res) => {
  // 3. ADDED try...catch block to prevent server crashes
  try {
    const filePath = path.resolve(__dirname, "../data/instagram_archive.json");

    // Read the file FRESH on every single call
    const rawFileData = await fs.readFile(filePath, "utf-8");

    // Parse it into JSON
    const jsonData = JSON.parse(rawFileData);

    // Send it down to the frontend!
    return res.status(200).json(jsonData);
  } catch (error) {
    // If the file is missing or broken, send a safe error message instead of crashing
    console.error("Error reading Instagram data:", error);
    return res.status(500).json({ error: "Failed to load Instagram feed" });
  }
});

export default router;
