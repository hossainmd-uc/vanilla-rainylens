import express from "express";

// Importing Routes
import instagramRouter from "./routes/instagram.js";

const app = express();

app.use("/api/instagram/", instagramRouter);

app.get("", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Instagram API</h1>',
    );
});

app.listen(3001, () => {
  console.log(`🚀 Server listening on http://localhost:${3001}`);
});
