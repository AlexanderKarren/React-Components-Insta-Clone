// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, updateComments] = useState(props.comments);
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment !== "") {
      const newArray = comments;
      newArray.push({username: "alex", text: newComment})
      updateComments(newArray);
      setNewComment("");
    }
  }

  return (
    <div>
      {props.comments.map(comment => {
        return <Comment comment={comment.text} username={comment.username}/>
      })}
      <CommentInput comment={newComment} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  );
};

export default CommentSection;
