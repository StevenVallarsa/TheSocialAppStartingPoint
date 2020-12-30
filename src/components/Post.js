import React from 'react';

function Post({ image, content, user, deletePost }) {
  
  return (
    <div>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post cover"
        />)}
      <p>{content} <span className="owner"> — Posted By {user}</span></p>
      <button onClick={() => deletePost(content)}>DELETE</button>
      <hr style={{ width: 500, marginRight: "85%", marginLeft: 25 }} />
    </div>
  )
}

export default Post;
