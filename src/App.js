/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";


const App = () => {
  const [keyWord, setKeyWord] = useState("");

  const handleChange = (event) => {
    setKeyWord(event.target.value);
  }

  return (
    <div className="App">
      <SearchBar keyWord={keyWord} handleChange={handleChange}/>
      <PostsPage keyWord={keyWord}/>
    </div>
  );
};

export default App;
