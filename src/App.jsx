import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import logo from './assets/react.svg'
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "data tesst1" },
    { id: 2, name: "data tesst2" }
  ])

  const name = "ani"
  const age = 15;
  const address = {
    name: "ab",
    age: 25
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        address={address}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={logo} alt="" className='logo' />
      </div>
    </div>
  );
}

export default App
