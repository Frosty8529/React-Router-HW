import React from 'react';
import { useParams } from 'react-router-dom';

function ToDoDetail() {
  const { number } = useParams();

  return (
    <div>
      <h1>ToDo Item {number}</h1>
      <p>This is the ToDo Item No.{number}.</p>
    </div>
  );
}

export default ToDoDetail;