import React, { useEffect, useState } from "react";
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
			label: todo, 
			done: false
		}
		
		const totalTodos = [newTodo, ...todos]
		
		enviarTodos(totalTodos)
		obtenerTodos()
		setTodo('')
		
		
		
	}
	const deleteTodo = (id) => {
	
		const updatedTodos = todos.filter(a => {
			return a.id !== id
		})
		enviarTodos(updatedTodos)
		obtenerTodos()
		
	}

	async function deleteAllTodos() {
		setTodos([])
		try {
			const openConection = await fetch('https://playground.4geeks.com/apis/fake/todos/user/djaimes',
				{
					method: "PUT",
					body: JSON.stringify(todos),
					headers: {
					  "Content-Type": "application/json"
					}
			}) 
			console.log(openConection.ok)
			} catch (error) {
				console.error(error)
			}
			
	
		
	} 

	async function createUser () {
		try {
		const openConection = await fetch('https://playground.4geeks.com/apis/fake/todos/user/djaimes',
			{
				method: "POST",
				body: JSON.stringify([]),
				headers: {
				  "Content-Type": "application/json"
				}
		}) 
		console.log(openConection)
		} catch (error) {
			console.error(error)
		}
		
		
	}



	async function enviarTodos (todos) {
		try {
		const openConection = await fetch('https://playground.4geeks.com/apis/fake/todos/user/djaimes',
			{
				method: "PUT",
				body: JSON.stringify(todos),
				headers: {
				  "Content-Type": "application/json"
				}
		}) 
		
		} catch (error) {
			console.error(error)
		}
		
		
	}

	async function obtenerTodos () {
		try {
		const openConection = await fetch('https://playground.4geeks.com/apis/fake/todos/user/djaimes',
			{
				method: "GET",
				headers: {
				  "Content-Type": "application/json"
				}
		}) 
		 const dataTodo = await openConection.json()
		 console.log(dataTodo[0])
		dataTodo[0].label === "" ? setTodos([]): setTodos(dataTodo)
		} catch (error) {
			console.error(error)
		}
		
		
	}
	

	useEffect(() => {
		createUser()
		obtenerTodos()
	},[])
		


	
	
		
	
	return (
		<>
			<main className="container">		
			<h1 className="text-center mt-5">To-dos!</h1>
			<Input 
			handleChange = {handleChange}
			addTodo = {addTodo}
			todo = {todo}
			deleteTodos = {deleteAllTodos}
			/>
			<section className=" m-auto w-50 container-fluid d-flex flex-column aling-items-center border border-light border border-2 rounded">
			{todos.map( todo =>{
				return (
					<TodoList
				key={todo.id}
				id = {todo.id}
				todo = {todo.label}
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
