import { useState } from 'react'
import Header from './componants/Header.jsx'
import AddTodo from './componants/AddTodo.jsx'
import TodoList from './componants/TodoList.jsx'


function App() {
  

  return (
    <>
      <main className='container'>
        {/* titre */}
        <Header />

        {/* form*/}
        <AddTodo />    

        {/* List */}
        <TodoList />
      </main>
    </>
  )
}

export default App  
