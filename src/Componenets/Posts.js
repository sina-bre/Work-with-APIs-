import { useState, useEffect } from "react";
import PostDetails from "./PostDetails";
import Comments from "./Comments";
import "./Posts.css";
const Posts = (props) => {
  const [information, setInformation] = useState("");
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    postInformation(index);
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
                  setIndex(index);
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
          isLoading={isLoading}
          information={information}
        />
      </div>
    </div>
  );
};

export default Posts;
