
import {useState, useEffect} from "react";
import Header from './componants/Header.jsx'
import AddTodo from './componants/AddTodo.jsx'
import TodoList from './componants/TodoList.jsx'
import { v4 as uuidv4 } from "uuid";

const LSKEY = "My todo app"

function App() {

const [todos, setTodos] = useState([]);
const [firstload, setFirstLoad] = useState(true)


  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
        if (todo.id === id){
            todo.done = !todo.done;
        }

        return todo;
    })
    setTodos(newTodos)
  }

  const addNewTodo = (newTodoName) => {
    console.log(newTodoName)
    const newTodo =  
      {
        id : uuidv4(),
        name : newTodoName,
        done : false
      }
  
    const newTodos = [...todos];
        newTodos.push(newTodo)
        setTodos(newTodos)
        console.log(todos)
  }

  useEffect(() => {
    const initialTodo = JSON.parse(window.localStorage.getItem(LSKEY + '.todos'))
    setTodos(initialTodo ?? [])
  }, []) ;
  

  useEffect(() => {
    if (!firstload) {
      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }else {
      setFirstLoad(false)
    }
  }, [todos, firstload]) ;





  const deleteTodo = (id) => {
   const newTodos = todos.filter((todo) => {
    if (todo.id === id) return false;
    return true
   })
  setTodos(newTodos)
} 

  return (
    <>
      <main className='container'>
        {/* titre */}
        <Header />

        {/* form*/}
        <AddTodo addNewTodo={addNewTodo}/>    

        {/* List */}
        <TodoList todos={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo}/>
      </main>
    </>
  )
  }

export default App  
