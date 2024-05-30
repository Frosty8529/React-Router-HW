import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ToDoItem.css';

function ToDoItem({ number }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/todos/${number}`);
  };

  return (
    <div className="todo-item" onClick={handleClick}>
      ToDo Item {number}
    </div>
  );
}

export default ToDoItem;