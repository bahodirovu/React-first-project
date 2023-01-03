import React from "react";
import MyInput from "./UI/input/MyInput";
import Mybutton from "./UI/button/Mybutton";
import { useState } from "react";

function PostForm({ createPost }) {
  const [posts, setPosts] = useState({ title: "", stack: "" });
  const addpost = (e) => {
    e.preventDefault();
    const newPost = {
      ...posts,
      id: Date.now(),
    };
    createPost(newPost);
    setPosts({ title: "", stack: "" });
  };
  return (
    <>
      <form>
        <h3 className="text-center">Create your posts</h3>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Program Language"
          value={posts.title}
          onChange={(e) => setPosts({ ...posts, title: e.target.value })}
        />
        <MyInput
          type="text"
          className="form-control my-3"
          placeholder="Your stack"
          value={posts.stack}
          onChange={(e) => setPosts({ ...posts, stack: e.target.value })}
        />
        <Mybutton className="btn btn-primary" onClick={addpost}>
          Add post
        </Mybutton>
      </form>
    </>
  );
}
export default PostForm;
