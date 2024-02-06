import { useState } from "react";

import data from "../data.json"

function TodoList() {
    
    const [ taskDisplay, setTaskDisplay ] = useState(data)
    //    function deleteTask(task)  {
    //     const newlist = taskDisplay.filter((taskObj )=> {
    //         return taskObj.id !== task;
    //     } );
    //     setTaskDisplay(newlist);
    //    }
        const deleteTask1 = (task) => {
        const newList = taskDisplay.filter((taskObj) => {
            return taskObj.id !== task;
        });
        setTaskDisplay(newList);
    }
        


      return  data.map((todolistDetails, index, arr) => {
            return (
                <section key={todolistDetails.id} className = 'TodoList'>
               
               
                <div  className="todo-line">
                    <h2> Task : {todolistDetails.task} </h2>
                    <p className="condition"> Condition: {todolistDetails.completed ? 
                    <img className="correct" src="src\Flat_tick_icon.svg"></img> : 
                    <img className="correct" src="src\x.png"></img> } 
                    <button onClick={() => { deleteTask1(taskDisplay)  }}> Delete </button>
                    </p>
                </div>
                </section>
            )

        }
        
        )
    }

     export default TodoList;