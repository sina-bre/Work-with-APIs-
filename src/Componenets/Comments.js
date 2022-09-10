import { useState } from "react";

const Comments = (props) => {
  console.log(props.comments);
  return (
    <div className={props.className}>
      <h1>Comments</h1>
      {props.isLoading2 ? (
        <h1>Loading...</h1>
      ) : (
        props.comments.map((item) => (
          <div>
            <div>
              <h3>
                Post ID :{item.postId} , ID:{item.id}
              </h3>
            </div>
            <div>
              <h3>Name :{item.name}</h3>
            </div>
            <div>
              <h3>Email :{item.email}</h3>
            </div>
            <div>
              <h5>Body :{item.body}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
