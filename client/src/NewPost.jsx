import { useState } from "react";

function NewPost({ onPostCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    campus: "",
    category: "",
    date: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const newPost = await response.json();
    onPostCreated(newPost);
    setFormData({
      title: "",
      campus: "",
      category: "",
      date: "",
      description: "",
      author: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4">📌 Publier une annonce</h2>
      <input className="input" name="title" placeholder="Titre" value={formData.title} onChange={handleChange} required />
      <input className="input" name="campus" placeholder="Campus" value={formData.campus} onChange={handleChange} required />
      <input className="input" name="category" placeholder="Catégorie" value={formData.category} onChange={handleChange} required />
      <input className="input" type="date" name="date" value={formData.date} onChange={handleChange} required />
      <textarea className="input" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input className="input" name="author" placeholder="Auteur" value={formData.author} onChange={handleChange} required />
      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Publier</button>
    </form>
  );
}

export default NewPost;
