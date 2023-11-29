import React, {useState, useRef} from "react";

const TodoList = () =>{
	const listRef = useRef("");
}

return(
    <div className="main">
        <div className="title">
            <h1>TODO LIST</h1>
        </div>

        <div className="inputArea">
            <input type="text" style={{width:500 , height:175}}/>
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
  
//   export default TodoList;