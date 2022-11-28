import React from 'react';
import Home from "./pages/Home";
import Entry from "./pages/Entry";
import View from "./pages/View";
import Submitted from "./pages/Submitted";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/view" element={<View />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </Router>
  );
}

export default App;
