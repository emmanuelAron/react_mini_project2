import React from 'react';
import TodoList from './TodoList';
import {Routes,Route } from "react-router-dom"

const Dashboard = () => {
    return (
    <div>
        <Routes>
            <Route path="/" element = {<TodoList />} />
        </Routes>
    </div>
   
    );
}

export default Dashboard;