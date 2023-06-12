import React from 'react';
import './TodoCounter.css'; 
import { TodoContext } from '../TodoContext';

function TodoCounter() { 
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  if (totalTodos === 0) {
    return (
      <h1 className="TodoCounter">Bienvenido a TODO Machine</h1>
    );
  } else if (totalTodos === completedTodos) {
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