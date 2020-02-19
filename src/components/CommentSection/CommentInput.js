// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.handleChange}
      />
    </form>
  );
};

export default CommentInput;
