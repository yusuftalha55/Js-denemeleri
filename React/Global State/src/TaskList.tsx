import { useState, useContext } from "react";
import {useTasks, useTasksDispatch } from './TasksContext.tsx';

export default function TaskList() {
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map(task =>(
                <li key={task.id}>
                    <task task= {task}/>
                </li>
            ))}
        </ul>
    );
}

function Task ({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <div>
                <input 
                   value={task.text}
                   onChange={e => {
                    dispatch({
                        type: "changed",
                        task: {
                            ...task,
                            text: e.target.value
                        }
                    });
                   }}/>
                <button onClick={()=> setIsEditing(false)}>
                    Save
                </button>   
            </div>
        );
    } else {
        taskContent = (
            <div>
                {task.text}
                <button onClick={()=> setIsEditing(true)}>
                    Edit
                </button>
            </div>
        );
    }
    return (
        <label>
            <input
               type="checkbox"
               checked={task.done}
               onChange={e => {
                dispatch({
                    type: "changed",
                    task: {
                        ...task,
                        done: e.target.checked
                    }
                });
               }}
            />
            {task.Content}
            <button onClick={()=> {
                dispatch({
                    type: "deleted",
                    id: task.id
                  });
            }}>
                Delete
            </button>
        </label>
    );    
}