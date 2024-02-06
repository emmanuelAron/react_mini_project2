import React, { useState } from "react";

function Task({ task, deleteTask }) {
  return (
    <div key={task.id} className="movie card">
      <h2> Task: {task.task} </h2>
      <p className="condition"> Condition: 
        {task.completed ? 
          <img className="correct" src="src/Flat_tick_icon.svg" alt="correct" /> : 
          <img className="correct" src="src/x.png" alt="incorrect" />
        } 
      </p>
      <button onClick={() => { deleteTask(task.id) }}>Delete</button>
    </div>
  );
}

export default Task;