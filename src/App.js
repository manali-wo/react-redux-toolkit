import React from "react";

import './App.css';
import { TodoForm, TodoList } from "./components/Todo";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
        <h1 className="form">Todo App</h1>
            <TodoForm />
            <TodoList />
        <h1 className="form">Counter App</h1>
            <Counter />
    </div>
  );
}

export default App;
