import { useState, useContext } from "react";
import { useTasksDispatch } from './TasksContext.tsx';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    const dispatch = useTasksDispatch();
    return (
        <div>
           <input 
              placeholder="Add Task"
              value={text}
              onChange={e => setText(e.target.value)}
           />
           <button onClick={() => {
              setText("");
              dispatch({
                type: "added",
                id: nextId++,
                text: text,
              });
           }}>
            Add
           </button>
        </div>
    );
}
let nextId = 3;