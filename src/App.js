import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Discovery from './Pages/Discovery/Discovery';
import { useEffect } from 'react';

import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {

  let slug =
    window.location.pathname === "/"
      ? "page"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Navbar />
      <StoryblokComponent blok={story.content} />

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Discovery />} />

      </Routes>




    </>
  );
}

export default App;
