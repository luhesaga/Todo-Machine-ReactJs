import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import './App.css';

//import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Terminar el curso de React.js', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'lalalalala', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.parse(defaultTodos));



function App() {  
  // const [todos, setTodos] = React.useState(parsedTodos);
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>    
  );
}

export default App;
