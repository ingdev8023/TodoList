import React from "react";


const TodoList = ({todo, deleteTodo}) => {
    return (
        <>
        <div className="m-2 p-2 d-flex justify-content-between bg-light border border-dark rounded">
            <h3>{todo.todo}</h3>
            <i className="fa-solid fa-xmark" onClick={()=> deleteTodo(todo.id)} id="delete"></i>            
        </div>
        </>
    )
}

export default TodoList