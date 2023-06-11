import { useState, useEffect } from "react";
import axios from "axios";

function FetchApi() {
  const [post, setPost] = useState({}); //for saving and displaying get request data
  const [ApiId, setApiId] = useState(0); // for RNG and passing as dependency

  const handleClick = () =>{
  setApiId(Math.ceil(Math.random()* 100));
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${ApiId}`) //get request
      .then((res) => {
        console.log(res);
        setPost(res.data); //saving data for resolve "res" to posts
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ApiId]);

  return (
    
    <div>
      <button onClick={handleClick} style={{backgroundColor: "#E6C5CA", margin: 50, padding:10}}>Generatre random</button>
      <br/><br/>
      <textarea placeholder={post.title} disabled={true} style={{width:400, height:200, resize: "none"}}/>
    </div>
  );
}

export default FetchApi;
