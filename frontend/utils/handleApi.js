// import axios from "axios"

// const Backend_url = "http://localhost:8000"

// const getAllTodo = (setTodo) => {
//     axios
//     .get(Backend_url)
//     .then(response => {
//         const data = response.data;
//         console.log("data--->", data);
//         setTodo(data); 
// })
// }

// const addTodo = (text , setText , setTodo) => {
//     axios
//     .post(`${Backend_url}/save`, {text})
//     .then( (data) => {
//         console.log(data)
//         setText("")
//         getAllTodo(setTodo)
//     })
//     .catch( (err) => console.log(err))
// }

// const updateTodo = (todoID, text, setText, setTodo, setIsUpdating ) => {
//     axios
//     .post(`${Backend_url}/update`, {_id : todoID , text})
//     .then( (data) => {
//         setText("")
//         setIsUpdating(false)
//         getAllTodo(setTodo)
//     })
//     .catch( (err) => console.log(err))
// }

// export { addTodo ,getAllTodo, updateTodo}

import axios from "axios";

const Backend_url = "http://localhost:8000";

const getAllTodo = (setTodo) => {
  axios
    .get(Backend_url)
    .then(response => {
      const data = response.data;
      console.log("data--->", data);
      setTodo(data); 
    })
    .catch(err => console.log(err));
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${Backend_url}/save`, { text })
    .then(data => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch(err => console.log(err));
};

const updateTodo = (todoID, text, setText, setTodo, setIsUpdating) => {
  axios
    .post(`${Backend_url}/update`, { _id: todoID, text })
    .then(data => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch(err => console.log(err));
};


const deleteTodo = (todoID , setTodo) => {
  axios
    .post(`${Backend_url}/delete`, { _id: todoID })
    .then(data => {
      getAllTodo(setTodo);
    })
    .catch(err => console.log(err));
};

export { addTodo, getAllTodo, updateTodo, deleteTodo };
