import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  const picUrl = "https://via.placeholder.com/215Links to an external site."
  const text ="blog log"
  const txt ="about"
  return (
    <div>
      <Header name ="overreacted"/>
      <About img src={picUrl} alt = {text}
       txt ="about"/>
    </div>
  );
}

export default App;
