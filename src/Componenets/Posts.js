import { useState, useEffect } from "react";
import PostDetails from "./PostDetails";
import Comments from "./Comments";
import "./Posts.css";
const Posts = (props) => {
  const [information, setInformation] = useState("");
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const postInformation = (index) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${index + 1}`)
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setInformation(res);
      });
  };

  const postComments = (index) => {
    setIsLoading2(true);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${index + 1}`)
      .then((res) => {
        setIsLoading2(false);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setComments(res);
      });
  };

  useEffect(() => {
    postInformation(index);
    postComments(index);
  }, [index]);

  return (
    <div className="main-content">
      <div className="main-content-left">
        <h1 className="posts-header">Posts</h1>
        {props.data.map((post, index) => (
          <div key={index} className="posts-contenet">
            <div className="post-information">
              <h3>
                {post.id} : {post.title}
              </h3>
            </div>
            <div className="div-btn">
              <button
                onClick={() => {
                  setIndex(post.id);
                }}
              >
                More Information
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PostDetails
          className="main-content-right-top"
          information={information}
          isLoading={isLoading}
        />
        <Comments
          className="main-content-right-bottom"
          isLoading2={isLoading2}
          comments={comments}
        />
      </div>
    </div>
  );
};

export default Posts;
