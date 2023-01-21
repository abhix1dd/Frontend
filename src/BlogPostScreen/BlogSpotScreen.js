import React, { useState, useEffect } from "react";
import { getBlogList } from "../API.js";
import homeButtom from '../assets/images/home.png'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function openSelectedBlog(event){
    console.log(event)
}
export default function BlogSpotScreen(props) {
    console.log('Here',props)
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
    <div className="maxHeight">
   
     <div className="modalView FlexBoxRow">
     <button className="ButtonClass" onClick={()=>{props.closeBlog()}}><img src={homeButtom} className="ImageClass"></img></button>
      <header className="Header topMargin">{blogPageDisplay.title}</header>
     </div>
     <div className="maxHeight FullPage modalView textBox">
        {blogPageDisplay.content}
      </div>
    </div>
  );
}
