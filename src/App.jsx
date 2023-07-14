
import {useState} from "react";
import Header from './componants/Header.jsx'
import AddTodo from './componants/AddTodo.jsx'
import TodoList from './componants/TodoList.jsx'


function App() {
  const initTodos = [
    {
        id: "1",
        name : "Apprendre react",
        done : false
    },
    {
        id : "2",
        name : "apprendre react 2",
        done : true
    },
    {   
        id : "3",
        name : "apprendre react 3",
        done : false
    }
];


const [todos, setTodos] = useState(initTodos);
        /*
    const handleClick = () => {
        const newTodos = [...todos];
        newTodos.push["This new todos"]
        setTodos(newTodos)
    }
    */
    const changeTodoStatus = (id) => {
      const newTodos = todos.map((todo) => {
          if (todo.id === id){
              todo.done = !todo.done;
          }

          return todo;
      })
      setTodos(newTodos)
  }

  return (
    <>
      <main className='container'>
        {/* titre */}
        <Header />

        {/* form*/}
        <AddTodo />    

        {/* List */}
        <TodoList todos={todos} changeTodoStatus={changeTodoStatus}/>
      </main>
    </>
  )
}

export default App  
