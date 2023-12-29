import React from "react";

const Input = ({handleChange, addTodo, todo, deleteTodos}) => {
    return (

 <form className="row g-3 d-flex flex-column align-items-center m-2" onSubmit={addTodo}>  
  <div className="col-6">
    <input type="text" className="form-control" value={todo} id="inputTodo" onChange={handleChange} placeholder="What needs to be done?"/>
  </div> 
  <div className="col-auto">
    <button type="submit" className="btn btn-primary m-auto">Add Todo</button>
  </div>
  <div className="col-auto">
    <button onClick={deleteTodos} className="btn btn-danger m-auto">Delete Todos</button>
  </div>
</form>
    )

}

export default Input