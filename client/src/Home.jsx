import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import NewPost from "./NewPost";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:3001/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Annonces CampusConnect</h1>
      <NewPost onPostCreated={handlePostCreated} />
      <div className="max-w-2xl mx-auto">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-500">Aucune annonce disponible.</p>
        )}
      </div>
    </div>
  );
}

export default Home;

