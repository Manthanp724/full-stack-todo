// import React from "react";
// import { useState, useEffect } from "react";
// import { getAllTodo , addTodo , updateTodo } from "../utils/handleApi.js";
// import "../styles/TodoList.css";
// import TodoText from "../components/TodoText.jsx";


// const TodoList = () => {
//   const [Todo, setTodo] = useState([]);
//   const [text , setText] = useState("")
//   const [isUpdating ,  setIsUpdating] = useState(false)
//   const [todoID, setTodoID] = useState("")

//   useEffect(() => {
//     getAllTodo(setTodo);
//   }, []);


//   const updatebtn = (_id , text) => {
//     setIsUpdating(true)
//     setText(text)
//     setTodoID(_id)
//   }

//   return (
//     <div className="container">
//       <h1>Todo App</h1>

//       <div className="top-bar">
//         <input 
//         type="text" 
//         placeholder="Enter Tasks"
//         value={text}
//         onChange={(e) => setText(e.target.value)} />
//         <button onClick={ isUpdating ? 
//         () => updateTodo(todoID , text, setText, setTodo, setIsUpdating) 
//         : () => addTodo(text, setText, setTodo)}>
//         Add </button>
//       </div>

//       <div className="todo-list">
//         {Todo.map((item) => (
//           <TodoText 
//           key={item._id} 
//           text={item.text}
//           updateMode = { () => updatebtn(item._id , item.text)}
//            />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState, useEffect } from "react";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "../utils/handleApi.js";
import "../styles/TodoList.css";
import TodoText from "../components/TodoText.jsx";

const TodoList = () => {
  const [Todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoID, setTodoID] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updatebtn = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoID(_id);
  };

  const deletebtn = (todoID) => {
    deleteTodo(todoID , setTodo )
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="top-bar">
        <input 
          type="text" 
          placeholder="Enter Tasks"
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
        <button 
          onClick={isUpdating ? 
            () => updateTodo(todoID, text, setText, setTodo, setIsUpdating) 
            : () => addTodo(text, setText, setTodo)}
        >
          {isUpdating ? "Update" : "Add"}
        </button>
      </div>

      <div className="todo-list">
        {Todo.map((item) => (
          <TodoText 
            key={item._id} 
            text={item.text}
            updatebtn={() => updatebtn(item._id, item.text)}
            deletebtn={() => deletebtn(item._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
