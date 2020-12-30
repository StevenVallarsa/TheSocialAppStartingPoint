import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` :  "Please Log In";
  }, [user]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  if (!user) {
    return <Login setUser={ setUser }/>
  } else {
    return (
      <>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} handleAddPost={handleAddPost}/>
        <PostList posts={posts} setPosts={setPosts} />          
      </>)
  }
}

export default App;
