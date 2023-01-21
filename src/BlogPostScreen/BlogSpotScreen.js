import React, { useState, useEffect } from "react";
import { getBlogList } from "../API.js";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import './blogPost.css';

function openSelectedBlog(event){
    console.log(event)
}
export default function BlogSpotScreen(props) {
    console.log(props)
  const [blogPageDisplay, setBlogPageDisplay] = useState('');
  useEffect(() => {
    getBlogList(`/${props.id}`)
      .then((response) => {
        console.log("Inside BlogSpotScreen", response);
        setBlogPageDisplay(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  
  return (
    <div>
      {/* <header>Eqaim Blog</header> */}
      <div className="blog-post">
      
  <h2>{blogPageDisplay.title}</h2>

      {/* <h1 className="title">{blogPageDisplay.title}</h1> */}
      <p className="content">{blogPageDisplay.content}</p>
    </div>
    </div>
  );
}
