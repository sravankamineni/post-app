

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import CreatePost from './components/CreatePost';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <button onClick={toggleDarkMode} style={{ position: 'fixed', top: 10, right: 10 }}>
          {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
        <Routes>
          <Route path="/" element={<PostsDisplay />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
































