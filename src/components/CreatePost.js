import React, { useState } from 'react';

function CreatePost({user, setPosts, posts}) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const post = {
      content,
      image,
      user
    }
    const newPosts = [post, ...posts]
    setPosts(newPosts);
    setContent('');
  }
  
  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
          value={ content }
        />
        <input 
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit Post</button>
      </form>
      
    </div>)
}

export default CreatePost;
