import React from "react";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
      if (task.trim() !== "") {
        setTasks([...tasks, task]);
        setTask("");
      }
    };
  
    return (
      <div className="main">
        <div className="title">
          <h1>TODO LIST</h1>
        </div>
  
        <div className="inputArea">
          <input
            type="text"
            style={{ width: 500, height: 30 }}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
  
        <div className="addArea">
          <button style={{ backgroundColor: "black" }} onClick={addTask}>
            ADD
          </button>
        </div>
  
        <div className="data">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default TodoList;