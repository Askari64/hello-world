import { useState, useEffect } from "react";
import axios from "axios";

function FetchApi() {
  const [posts, setPosts] = useState([]); //for saving get request data

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //get request
      .then((res) => {
        console.log(res);
        setPosts(res.data); //saving data for resolve "res" to posts
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default FetchApi;
