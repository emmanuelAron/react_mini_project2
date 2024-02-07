
//import { useState } from 'react';
import '../css/App.css';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import SideBar from './SideBar.jsx';
import TodoList from './TodoList.jsx';

function App(){
 
  return (
    <div className="App">
      <Navbar />
      <TodoList />
      <Footer />
      <SideBar />

    </div>
  );
}

export default App;