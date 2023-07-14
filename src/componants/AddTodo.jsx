import {useRef} from "react"


export default function AddTodo ({addNewTodo}) {
    const inputRef = useRef();

const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(inputRef.current.value);
    inputRef.current.value = "";
}
    return(
        <section>
            <form action="#" method="POST" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="newTodo" placeholder="Add new todo" id="" />
            <button type="submit">Add Todo</button>
            </form>
        </section>
    )
}