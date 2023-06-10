import React from 'react';
import './TodoCounter.css'; 
import { TodoContext } from '../TodoContext';

function TodoCounter() { 
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  if (totalTodos === completedTodos) {
    return (
      <h1 className="TodoCounter">Felicidades has completado todos tus pendientes</h1>
    );
  }

  return (
    <h1 className="TodoCounter">Has completado <span>{completedTodos}
      </span> de <span>{totalTodos}</span> TODOs
    </h1>
  ); }
export { TodoCounter };