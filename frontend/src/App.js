import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import TopicPage from "./Pages/TopicPage";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<TopicPage endpoint="/dsa" title="Coding (DSA)" />} />
          <Route path="/aptitude" element={<TopicPage endpoint="/aptitude" title="Aptitude" />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
