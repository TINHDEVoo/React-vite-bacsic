import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import logo from './assets/react.svg'
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo)
  }
  return (
    <div className="todo-container">
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {
        todoList.length > 0 &&
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      }
      {
        todoList.length === 0 &&
        <div className="todo-image">
          <img src={logo} alt="" className='logo' />
        </div>
      }
    </div>
  );
}

export default App
