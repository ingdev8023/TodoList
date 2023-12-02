import React from "react";

const Input = ({handleChange, addTodo, todo}) => {
    return (

 <form className="row g-3 d-flex flex-column align-items-center m-2" onSubmit={addTodo}>  
  <div className="col-6">
    <input type="text" className="form-control" value={todo} id="inputTodo" onChange={handleChange} placeholder="What needs to be done?"/>
  </div> 
  <div className="col-auto">
    <button type="submit" className="btn btn-primary m-auto">Add Todo</button>
  </div>
</form>
    )

}

export default Input