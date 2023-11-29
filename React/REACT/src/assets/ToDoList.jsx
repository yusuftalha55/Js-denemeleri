import React, { useState, useRef } from "react";

const TodoList = () => {
  const listRef = useRef(null);
  const inputValue = useRef(null);

  const adToDo = () => {
    const newTask = document.createElement("li");
    const newTaskDel = document.createElement("button");
    newTaskDel.addEventListener("click", delClick);
    newTaskDel.textContent = "Sil";

    newTask.innerHTML = inputValue.current.value;
    newTask.appendChild(newTaskDel);

    listRef.current.appendChild(newTask);
  };

  const delClick = (e) => {
    const taskToRemove = e.target.parentNode;
    taskToRemove.remove();
  };

  return (
    <div  style={{margin:350 , backgroundColor:"#F0F8FF", width:750 , height:750}} className="main">
      <div className="title">
        <h1>TODO LIST</h1>
      </div>

      <div className="inputArea">
        <input placeholder="add item..." ref={inputValue} type="text" style={{ width: 150, height: 45 }} />
      </div>

      <div style={{margin:15}} className="addArea">
        <button onClick={adToDo} style={{ backgroundColor: "grey" }}>
          ADD
        </button>
      </div>

      <div className="data">
        <ul ref={listRef}></ul>
      </div>
    </div>
  );
};

export default TodoList;
