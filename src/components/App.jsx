
//import { useState } from 'react';
import '../css/App.css';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import SideBar from './SideBar.jsx';
import TodoList from './TodoList.jsx';
import Dashboard from './Dashboard.jsx';
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Dashboard />
        <Footer />
        <SideBar />
      </Router>
    </div>
  );
}

export default App;