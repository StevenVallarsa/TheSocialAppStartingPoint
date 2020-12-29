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

  if (!user) {
    return <Login setUser={ setUser }/>
  } else {
    return (
      <>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} setPosts={setPosts} posts={posts}/>
        {/* <PostList posts={posts}/> */}
        {posts.map((post, index) => (
          <Fragment key={index}>
            {post.image && (
              <img
                style={{ height: 100, width: 200, objectFit: "cover" }}
                src={URL.createObjectURL(post.image)}
                alt="Post cover"
              />)}
            <p>{post.content} <span class="owner"> — Posted By {user}</span></p>
            <hr style={{ width: 500, marginRight: "85%", marginLeft: 25}} />
              
            
          </Fragment>
          
        ))}
          
      </>)
  }
}

export default App;
