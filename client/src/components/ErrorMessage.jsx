import React from 'react'
import style from "../components/ErrorMessage.module.css"

const ErrorMessage = ({items}) => {
  return (
    <>
      {items.length === 0 && <h3 className={`${style.taskHead} mt-3 `}>Add Task  &#128526;</h3>}
    </>
  )
}

export default ErrorMessage
