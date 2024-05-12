import React from 'react'
import style from "../components/TodoInput.module.css"
import { useState } from 'react';
import axios from 'axios';

const TodoInput = ({sumbitData}) => {

  
  
  return (
    <>
    <form onSubmit={sumbitData}>
      <input type="text" placeholder='Enter the Todo Task here...'
       className={style.todoInput}   name='description' required/>
       <button className={`${style.button} btn btn-info` } >Add</button>
       </form>
    </>
  )
}

export default TodoInput
