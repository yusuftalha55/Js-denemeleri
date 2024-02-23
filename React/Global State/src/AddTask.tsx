import { useState, useContext } from "react";
import { useTasksDispatch } from './TasksContext.tsx';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    const dispatch = useTasksDispatch();
    return (

    );
}