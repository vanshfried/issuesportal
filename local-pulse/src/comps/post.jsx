import React from "react";
import '../styles/post.css';

const Post = () => {
  return (
    <div className="issues-wrapper">
      {[...Array(5)].map((_, i) => (
        <div key={i}>Post #{i + 1}</div>
      ))}
    </div>
  );
};

export default Post;