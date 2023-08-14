import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About></About> } />
        

       
        </Routes>
        <Footer></Footer>
        

        
      </div>
    </Router>
  );
}

export default App;
