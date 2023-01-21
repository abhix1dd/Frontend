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
import NewBlogScreen from "../NewBlogScreen/NewBlogScreen.js"
import logo from './create.jpg' 

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

  return (
    <div>
      {state == "HomeScreen" && (
        <div>
          <header>Eqaim Blog</header>
          <div className="FullPage">
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
                      sx={{ minWidth: 275 }}
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
               
                  {/* <img src={logo}  alt="Logo" /> */}
                </div>
                
              );
            })}
              
          </div>
          <div>
                    <img style={{ width: 50, height: 60,position:"fixed",bottom:0,right:0,padding:100 }} src={logo}  alt="Logo" onClick={() => {
                        setState('NewBlogScreen');
                    }} />
                </div>
        </div>
      )}
      {state == 'viewScreen' && 
      <div>
        <BlogSpotScreen id={currentSelected}/>
      </div>
        }
      {state == 'NewBlogScreen' && 
      <div>
        <NewBlogScreen />
      </div>
        }
    </div>
  );
}
