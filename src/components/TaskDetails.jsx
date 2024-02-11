import React from 'react'

function TaskDetails(props) {
    console.log('props taskDetails: ',props)
  return (
   
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
  )
}
export default TaskDetails;