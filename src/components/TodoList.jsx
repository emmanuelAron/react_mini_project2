import { useState } from "react";
import data from "../../data.json"
import TaskDetails from "./TaskDetailsOld.jsx"

function TodoList(){
    
    const [ tasksToDisplay, setTasksToDisplay ] = useState(data)
   //console.log('tasksToDisplay: ',tasksToDisplay)
    
    const deleteTask = (taskId) => {
        const newList = tasksToDisplay.filter((taskObj) => {
            return taskObj.id !== taskId;
        });
        setTasksToDisplay(newList);
    }

    return(
        <section className="TodoList">
            {tasksToDisplay.map( (taskObj) => {
                return(
                 //  <TaskDetails key={taskObj.id} task={taskObj} deleteTask={deleteTask} tasksToDisplay={tasksToDisplay} />
                    <div key={taskObj.id} className="movie card">
                        <h2> Task : {taskObj.task} </h2>
                        <p className="condition"> Condition: 
                        {
                        taskObj.completed ? 
                        <img className="correct" src="src/assets/Flat_tick_icon.svg"></img> : 
                        <img className="correct" src="src/assets/x.png"></img> 
                        } 
                        </p>
                        <button onClick={() => {deleteTask(taskObj.id)}}>Delete</button>
                    </div>
                 // <TaskDetails tasksToDisplay={taskObj.id} />
                );
            })}

        </section>
    );
}

export default TodoList;