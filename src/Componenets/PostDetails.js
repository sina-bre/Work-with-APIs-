const PostDetails = (props) => {
  const Information = () => {
    return (
      <div>
        <div>
          <h3>
            User ID: {props.information.userId} , ID: {props.information.id}
          </h3>
        </div>
        <div>
          <h3>Title: {props.information.title}</h3>
        </div>
        <div>
          <h3>Body:</h3>
          <h5>{props.information.body}</h5>
        </div>
      </div>
    );
  };
  return (
    <div className={props.className}>
      <h1>PostDetails</h1>
      {props.isLoading ? <h1>Loading...</h1> : <Information />}
    </div>
  );
};

export default PostDetails;
