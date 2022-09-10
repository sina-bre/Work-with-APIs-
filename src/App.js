import Posts from "./Componenets/Posts";
import { useEffect, useState } from "react";
const App = () => {
  // const [counter, setCounter] = useState(1);
  const [data, setData] = useState([]);
  const fetchAPI = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Posts data={data} />
    </div>
  );
};

export default App;
