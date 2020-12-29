import React, { useState } from 'react';

function PostList({posts}) {
  
  return (
    <div>
      {posts && posts.map(post => <p key={post.content}>{post.content}</p>)}
    
    </div>)
}

export default PostList;
