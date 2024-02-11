
import { useParams } from "react-router-dom";
//import data from "../data.json"

function TaskDetailsOld(props) {
  const {taskId} = useParams();
  const { tasksToDisplay } = props;


   const foundTask = tasksToDisplay.find((task)=> task.id === parseInt(taskId));

   if (!foundTask) {
    return <div>Task not found</div>;
  }

  return (

    <div>
       <h2> Task: {foundTask.task} </h2>
       {/* <div key={task.id} className="movie card">
        <h2> Task: {task.task} </h2> 
       <p className="condition"> Condition: 
         {task.completed ? 
         // strange behavior : works only with src/ 
           <img className="correct" src='src/assets/Flat_tick_icon.svg' alt="correct" /> : 
           <img className="correct" src="src/assets/x.png" alt="incorrect" />
         } 
       </p>
       <button onClick={() => { deleteTask(task.id) }}>Delete</button>
     </div> */}
    </div>

    
  );
}

export default TaskDetailsOld;