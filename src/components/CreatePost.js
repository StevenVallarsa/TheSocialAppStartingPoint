import React, { useState, useRef } from 'react';

function CreatePost({ user, handleAddPost }) {
  
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault();
    const dateTime = new Date();
    const post = {
      content: content + " : " + dateTime,
      image,
      user
    }

    handleAddPost(post);
    setContent('');
    imageInputRef.current.value = '';
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
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
      
    </div>)
}

export default CreatePost;
