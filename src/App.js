import './App.css';
import React, {useState} from "react";
import TopBar from './components/TopBar'; 
import CreateNote from './components/CreatePost';
import PostList from './components/PostList';

function App() {

  // List of all posts
  const [allPosts, setAllPost] = useState([]) 
  // console.log(allPosts);

  return (
    <div className="App">
        <TopBar/>
        <CreateNote allPosts={allPosts} setAllPost={setAllPost} />
        <PostList allPosts={allPosts}/>
    </div>
  );
}

export default App;
