// import React from 'react'
// import { MdDelete } from "react-icons/md";
// import { BiEdit } from "react-icons/bi";
// import "../styles/TodoText.css"

// const TodoText = ({text , updatebtn , deletebtn}) => {
//   return (
//     <div className='todo'>
//     <div className="text">{text}</div>
//     <div className="icons">
//         <BiEdit style={{cursor : 'pointer'}} className = 'icon' onClick = {updatebtn}/>
//         <MdDelete style={{cursor : 'pointer'}} className = 'icon' onClick ={deletebtn}/>
//     </div>
//     </div>
//   )
// }

// export default TodoText


import React from 'react';
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import "../styles/TodoText.css";

const TodoText = ({ text, updatebtn, deletebtn }) => {
  return (
    <div className='todo'>
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit style={{cursor: 'pointer'}} className='icon' onClick={updatebtn} />
        <MdDelete style={{cursor: 'pointer'}} className='icon' onClick={deletebtn} />
      </div>
    </div>
  );
}

export default TodoText;
