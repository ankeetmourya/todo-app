import React from 'react'
import style from "../components/Item.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom';

const Item = ({key, todoItem}) => {

  const handleDelete = async (id) => {
    console.log('id', id);
    if (!id) {
      console.error('Invalid ID:', id);
      return;
    }
  
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      //alert("Task Deleted Successfully...");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <>
     <li className='list-group-item' key={key} >
         <span className={style.todoSpan}>{todoItem.description}</span>
         <button className={`${style.button} btn btn-danger`} onClick={() => handleDelete(todoItem.id)}>Delete</button>
     </li>
    </>
  )
}

export default Item
