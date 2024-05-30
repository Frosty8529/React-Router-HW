import React from 'react';
import ToDoItem from './ToDoItem';

function ToDo() {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div>
      <h1>ToDo List</h1>
      {items.map(number => (
        <ToDoItem key={number} number={number} />
      ))}
    </div>
  );
}

export default ToDo;