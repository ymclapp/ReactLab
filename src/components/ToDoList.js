import React from 'react'
import ToDoItem from './ToDos';

function ToDoList(props) {

  const { toDoItems, onDelete, onUpdate } = props;

  return (
    <>
      {toDoItems.map(toDoItem => (
        <ToDoItem key={toDoItem.title} task={toDoItem} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </>
  )
}

export default ToDoList;