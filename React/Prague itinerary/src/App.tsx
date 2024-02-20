import { useReducer, useState } from 'react'


export default function TaskApp() {
    const [tasks, dispatch] = useReducer (
        taskReducer,
        initialTasks
    );

    function handleAddTask (text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: "delted",
            id: taskId
        });
    }

    return(
        <div>
            <h1>Prague itinerary</h1>
        
        </div>
    )
}