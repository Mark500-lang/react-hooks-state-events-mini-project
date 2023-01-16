import React from "react";
import { TASKS } from "../data";

function TaskList({tasks,deletedItem}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task,index)=>(
        <TASKS 
          deletedItem={deletedItem}
          key={index}
          text={task.text}
          category={task.category}
         />
      ))}
    </div>
  );
}

export default TaskList;
