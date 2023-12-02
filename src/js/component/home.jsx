import React, { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState("")
	const [todos, setTodos] = useState([])

	const handleChange = (e) => {
		setTodo(e.target.value)
	}

	const addTodo = (e) => {
		e.preventDefault()
		const newTodo = {
			id: Date.now(),
			todo: todo
		}

		const totalTodos = [newTodo, ...todos]

		setTodos(totalTodos)
		setTodo('')
	}
	const deleteTodo = (id) => {
		const updatedTodos = todos.filter(a => {
			return a.id !== id
		})
		setTodos(updatedTodos)
	}
	return (
		<>
			<main className="container">		
			<h1 className="text-center mt-5">To-dos!</h1>
			<Input 
			handleChange = {handleChange}
			addTodo = {addTodo}
			todo = {todo}
			/>
			<section className=" m-auto w-50 container-fluid d-flex flex-column aling-items-center border border-light border border-2 rounded">
			{todos.map( todo =>{
				return (
					<TodoList
				key={todo.id}
				id = {todo.id}
				todo = {todo}
				deleteTodo = {deleteTodo}
				/>
				)
			} )}
			
			</section>	
			</main>			
				
				
				
				
		</>
	);
};

export default Home;
