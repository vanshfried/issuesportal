import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div>
      <h2>📝 All Posts</h2>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map(post => (
        <div key={post._id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>👍 {post.likes} | 💬 {post.comments.length} comments</small>
        </div>
      ))}
    </div>
  );
}

export default Posts;
