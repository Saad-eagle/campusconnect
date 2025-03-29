import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts", postsRoutes);

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
