import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  let navigate = useNavigate();
  return (
    <div>
      {listOfPosts.map((post, key) => {
        return (
          <div
            className="post"
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            <div className="title"> {post.title}</div>
            <div className="body"> {post.postText}</div>
            <div className="footer"> {post.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
