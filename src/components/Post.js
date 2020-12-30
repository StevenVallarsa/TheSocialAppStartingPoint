import React from 'react';

function Post({ image, content, user, deletePost, loggedInUser, date}) {  
  return (
    <div>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post cover"
        />)}
      <p>{content} <span className="owner" style={{ color: loggedInUser === user ? "green" : "black" }}> — Posted By {user} on {date}</span></p>
      <button onClick={() => deletePost(content)} style={{display: user === loggedInUser ? "block" : "none"}}>DELETE</button>
      <hr style={{ width: 500, marginRight: "85%", marginLeft: 25 }} />
    </div>
  )
}

export default Post;
