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
    
}