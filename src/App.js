import './App.css';
import React, {useState} from "react";
import TopBar from './components/TopBar'; 
import CreateNote from './components/CreateNote';

function App() {

  // List of all posts
  const [allPosts, setAllPost] = useState([]) 
  console.log(allPosts);
  
  return (
    <div className="App">
        <TopBar/>
        <CreateNote allPosts={allPosts} setAllPost={setAllPost} />
    </div>
  );
}

export default App;
