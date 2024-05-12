import React from 'react'
import Item from "./Item"

const TodoItem = ({items}) => {
  console.log('ites/ms', items);
  return (
    <ul className="list-group" > 
        {items.map((item)=> (
            <Item  
            key={item.id}
            todoItem={item}></Item>
        ))}
    </ul>
  )
}

export default TodoItem
