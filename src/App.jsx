
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SideBar from './components/SideBar.jsx';
import TodoList from './components/TodoList.jsx';
import { NotFound } from './components/NotFound.jsx';
import  TaskDetails  from './components/TaskDetails.jsx';
import {About} from './components/About.jsx'
import data from "../data.json"

function App() {

  return (
    <div className="App">

      <Navbar />
      <SideBar />

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/tasks/:taskId" element={<TaskDetails tasksToDisplay={data} />} /> 
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;