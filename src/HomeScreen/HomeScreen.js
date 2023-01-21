import React, { useState, useEffect } from "react";
import { getBlogList } from "../API.js";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import BlogSpotScreen from "../BlogPostScreen/BlogSpotScreen.js";
function openSelectedBlog(event) {
  console.log(event);
  return <BlogSpotScreen></BlogSpotScreen>;
}
export default function HomeScreen() {
  const [state, setState] = useState("HomeScreen");
  const [currentSelected,setCurrentSelecetd] = useState('')
  const [blogListDisplay, setBlogPostDisplay] = useState([]);
  useEffect(() => {
    getBlogList("/")
      .then((response) => {
        console.log("Inside HomeScreen", response);
        let temp = [];
        // temp = response.map(element=>element.title)
        setBlogPostDisplay(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function closeBlog(){
    setState('HomeScreen')
  }

  return (
    <div className="maxHeight">
      {state == "HomeScreen" && (
        <div className="maxHeight">
          <div className="FullPage maxHeight">
            {blogListDisplay.map((element, index) => {
              return (
                <div key={index} className="CardFlex">
                  <Button
                    id={element._id}
                    className="maxHeight"
                    onClick={() => {
                        setCurrentSelecetd(element._id);
                        setState('viewScreen');
                    }}
                  >
                    <Card
                      sx={{ minWidth: 300 , maxWidth : 300, minHeight:300, maxHeight:300}}
                      variant="outlined"
                      className="maxHeight"
                    >
                      <div className="CardFlexInside maxHeight">
                        <CardContent className="height75">
                          <Typography variant="h5" component="div">
                            {element.title}
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {state == 'viewScreen' && 
      <div className="maxHeight">
        <BlogSpotScreen id={currentSelected} closeBlog={closeBlog}/>
      </div>
        }
    </div>
  );
}
