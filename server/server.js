import express from "express";
import cors from "cors";

// Importing Routes
import instagramRouter from "./routes/instagramDataApi.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
