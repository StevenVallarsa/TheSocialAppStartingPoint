import React from 'react';
import Post from './Post';

function PostList({ posts, setPosts }) {
  
  const deletePost = (content) => {
    setPosts(posts.filter(post => post.content !== content));
  }
  
  return posts.map((post, index) => <Post key={index} {...post} deletePost={deletePost} />
        
  )
}

export default PostList;
