
export default function TodoList ({todos, changeTodoStatus}) {


    return(
        <section>
            <h2>Todos : </h2>
            <ul>
                {todos.map((todo, index) => (
                <li key={index}>
                    <input 
                    type="checkbox"
                     id={todo.id} 
                     checked={todo.done} 
                     onChange={() => changeTodoStatus(todo.id)}/>
                    {todo.name}
                </li>
                )
                )}
            </ul>
        </section>
    )
}