// App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages-website/Home";
import HomeApp from "./pages-app/HomeApp";
import Contact from "./pages-website/Contact";

//import About from './pages/About';
//import Contact from './pages/Contact';
//import UserDetails from './pages/UserDetails'; // New component

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<HomeApp />} />
        <Route path="/contact" element={<Contact />} />
        {/* Define dynamic route */}
        {/*   <Route path="/user/:id" element={<UserDetails />} />*/}
      </Routes>
    </div>
  );
};

export default App;
