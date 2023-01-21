import React, { useState, useEffect } from "react";
import { getBlogList } from "../API.js";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./NewBlogScreen.css";
import logo from "../assets/images/saveIcon.png";
import homeButtom from "../assets/images/home.png";

export default function NewBlogScreen(props) {
  const [title, setTtile] = useState("");
  const [content, setContent] = useState("");

  async function postInfo(props) {
    let data = {
      title: title,
      content: content,
    };
    if (data.title && data.content) {
      await getBlogList("/addBlog", "POST", data);
      props.closeBlog();
    } else {
      console.log("Please Enter Title and Content");
    }
  }
  return (
    <div
      className="TwoColumnFlex"
      style={{ position: "absolute", left: 5, paddingLeft: 50 }}
    >
      <div className="TwoColumnFlexSide">
        <button
          style={{ marginTop: 100, height: 60 }}
          className="ButtonClass"
          onClick={() => {
            props.closeBlog();
          }}
        >
          <img src={homeButtom} className="ImageClass"></img>
        </button>
        <button style={{ marginTop: 20, height: 60 }} className="ButtonClass">
          {" "}
          <img
            style={{ height: 50, color: "grey" }}
            src={logo}
            className="ImageClass"
            alt="Logo"
            onClick={() => {
              postInfo(props);
            }}
          />
        </button>
      </div>
      <form className="form-box">
        <div className="field1">
          <input
            placeholder="Title"
            onChange={(e) => setTtile(e.target.value)}
          />
          <textarea
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
