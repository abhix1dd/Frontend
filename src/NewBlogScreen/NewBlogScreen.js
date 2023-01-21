import React, { useState, useEffect } from "react";
import { getBlogList } from "../API.js";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import './NewBlogScreen.css'
import logo from './create.jpg' 

export default function NewBlogScreen() {

    const [title, setTtile] = useState('');
    const [content, setContent] = useState('');

    function postInfo(){
        let data={
                title:title,
                content:content
               }
               console.log(data)
        
               getBlogList("/addBlog","POST",data)
    }

  return (
    <div className = "form-box">
   
    <form>
    <div>
        <img style={{ width: 70, height: 70,position:"fixed",top:0,left:0,padding:100,marginTop:50 }} src={logo}  alt="Logo"
         onClick={() => {
            postInfo()
                    }} />
                </div>
        <div className = "field1">
        <input placeholder="Title" onChange={e => setTtile(e.target.value)}/>        
        <textarea placeholder="Content" onChange={e => setContent(e.target.value)}/>
 
        </div>

        
    </form>


</div>
  );
}
