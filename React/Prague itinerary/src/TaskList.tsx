import { useState } from "react";

export default function TaskList({
  tasks,
  onChangeTask,
  onDleteTask
}) {
    return (
        <ul>
            {tasks.map(task =>(
                <li key={task.id}>
                    <task
                      task = {task}
                      onChange = {onChangeTask}
                      onDelete = {onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}