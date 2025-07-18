import React, { useState } from 'react';
import axios from 'axios';

const CreatePosts = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.length < 5 || body.length < 20) {
      setMessage('Title must be at least 5 characters and body at least 20.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/create', {
        title,
        body
      });

      setMessage('Post created successfully!');
      setTitle('');
      setBody('');
    } catch (error) {
      console.error(error);
      setMessage('Failed to create post.');
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePosts;
