import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalContext from './contexts/GlobalContext';

import './App.css'

import { useState, useEffect } from 'react';

import axios from "axios";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import PostsPage from "./pages/PostsPage";

function App() {

  const [list, setList] = useState([]);

  function fetchPost() {
    axios.get("http://localhost:3000/posts/")
      .then((res) =>
        setPost(res.data)
      )
      .catch((err) => console.error("Errore:", err));

  }


  useEffect(
    () => fetchPost(),
    [])

  return (

    <>
      <GlobalContext.Provider value={{ post }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/list" element={<PostsPage />} />
              <Route path="/list/:id" element={<PostDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App