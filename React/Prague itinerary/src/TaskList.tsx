import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}
