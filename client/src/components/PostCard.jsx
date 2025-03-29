function PostCard({ post }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-1">📍 {post.campus}</p>
        <p className="text-sm text-gray-600 mb-1">📅 {post.date}</p>
        <p className="text-gray-800 mt-2">{post.description}</p>
        <p className="text-xs text-right text-gray-400 mt-4">Posté par {post.author}</p>
      </div>
    );
  }
  
  export default PostCard;
  