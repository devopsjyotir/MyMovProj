import React from "react";
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
<Navbar />

<main>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</main>
    </div>
  );
}

export default App;
