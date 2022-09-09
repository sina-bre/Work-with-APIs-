import { useState } from "react";

const Comments = (props) => {
  return (
    <div className={props.className}>
      <h1>Comments</h1>
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h5>{props.information.body}</h5>
        </div>
      )}
    </div>
  );
};
export default Comments;
