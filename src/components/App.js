import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
 
  return (
    <div>
      <Header name ={blogData.name}/>
      <About image= {blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
      <Article/>
    </div>
    
     
  
  );
}

export default App;
