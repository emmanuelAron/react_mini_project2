import { useState } from "react";
import data from "../data.json"
import Task from "./Task.jsx"

function TodoList(){
    const [ tasksToDisplay, setTaskToDisplay ] = useState(data)
    let task = "";
    
    const deleteTask = (taskId) => {
        const newList = tasksToDisplay.filter((taskObj) => {
            return taskObj.id !== taskId;
        });
        setTaskToDisplay(newList);
    }

    return(
        <section className="TodoList">
            {tasksToDisplay.map( (taskObj) => {
                return(
                    <Task key={taskObj.id} task={taskObj} deleteTask={deleteTask} />
                    // <div key={taskObj.id} className="movie card">
                    //     <h2> Task : {taskObj.task} </h2>
                    //     <p className="condition"> Condition: 
                    //     {
                    //     taskObj.completed ? 
                    //     <img className="correct" src="src/Flat_tick_icon.svg"></img> : 
                    //     <img className="correct" src="src/x.png"></img> 
                    //     } 
                    //     </p>
                    //     <button onClick={() => {deleteTask(taskObj.id)}}>Delete</button>
                    // </div>
                );
            })}

        </section>
    );
}

export default TodoList;