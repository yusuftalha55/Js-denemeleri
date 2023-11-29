import React, {useState, useRef} from "react";

const TodoList = () =>{
	const listRef = useRef("");
	const inputValue = useRef("");

	const adToDo = () => {
		const newTask = document.createElement("li");
		const newTaskDel = document.createElement("button");
		newTaskDel.addEventListener("click", delClick);
		newTaskDel.textContent = "Sil";
		newTask.appendChild(newTaskDel);

		newTask.innerHTML = inputValue.current.value;

		listRef.appendChild(newTask);

	}
}

return(
    <div className="main">
        <div className="title">
            <h1>TODO LIST</h1>
        </div>

        <div className="inputArea">
            <input ref={inputValue} type="text" style={{width:500 , height:175}}/>
        </div>

        <div className="addArea">
            <button onClick={adToDo} style={{backgroundColor:"black"}}>ADD</button>
        </div>

        <div className="data">
			<ul ref={listRef}>

			</ul>

        </div>

    </div>
) 
  
  export default TodoList;