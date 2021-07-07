import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"

const PostsPage = (props) => {
  let noResults = true;

  return (
    <div className="posts-container-wrapper">
      {dummyData.map((post) => {
        if (post.username.includes(props.keyWord)) {
          noResults = false;
          return (
            <Post post={post}/>
          )
        }
      })}
      <div style={noResults ? {display:"block"} : {display:"none"}}>There are no results matching your search "{props.keyWord}"</div>
    </div>
  );
};

export default PostsPage;

