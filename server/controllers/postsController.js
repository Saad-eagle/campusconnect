import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../posts.json");

let posts = [];
try {
  const data = fs.readFileSync(filePath, "utf-8");
  posts = JSON.parse(data);
} catch (err) {
  console.error("Erreur lors de la lecture du fichier posts.json :", err);
  posts = [];
}

const savePosts = () => {
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
};

export const getPosts = (req, res) => {
  res.json(posts);
};

export const createPost = (req, res) => {
  const newPost = { ...req.body, id: Date.now() };
  posts.push(newPost);
  savePosts();
  res.status(201).json(newPost);
};

