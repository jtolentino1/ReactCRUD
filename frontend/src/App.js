import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Entry from "./pages/Entry";
import View from "./pages/View";

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
