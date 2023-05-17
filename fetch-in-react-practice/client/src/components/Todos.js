/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {

      fetch('/api/todos')
      .then(res => {
        setIsLoading(false)
        return res.json()
      })
      .then(res => {
      setTodos(res)
      })
      .catch(e => {
        console.error("error: ", e.message)
      })
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  async function addTodo(newTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };
      try {
        const res = await fetch('/api/todos', req);
        if (!res.ok) throw new Error(res.status)
        const todo = await res.json();
        setTodos([...todos, todo])
      } catch(err ){
        setError(err)
      }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  async function toggleCompleted(todoId) {
    //find the todo item from the todos state using passed in todoId and assign it to a variable (array methods)
    //use a fetch method to update the database with the updated todo item (completed state toggled) - return an object of the updated todos array
    //update the frontend
    // map - find the matching todo for the updated todo, and update  state
    function isSelected(todo) {
      return todo.todoId === todoId
    }
    let selected = todos.find(isSelected)
    selected.isCompleted = (!selected.isCompleted)

    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selected)
    };

    try {
      const res = await fetch(`api/todos/${todoId}`, req);
      if (!res.ok) throw new Error(res.status);
      const updatedTodo = await res.json();

      const updatedTodos = todos.map(todo => {
        if (todo.todoId === todoId) {
          return updatedTodo;
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      setError(error);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}


/* toggleCompleted:
 *  Find the index of the todo with the matching todoId in the state array.
 *  Get its "isCompleted" status.
 *  Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
 *  Use fetch to send a PATCH request to `/api/todos/${todoId}`
 *  Once the response JSON is received and parsed,
 *    - create a shallow copy of the todos array from state
 *    - replace the old todo with the todo received from the server
 *    - handle errors appropriate (as mentioned above)
 *
 *  NOTE: "toggle" means to flip back and forth, so clicking a todo
 *  in the list repeatedly should "toggle" its isCompleted status back and forth.
 *
 *  DO NOT try to calculate the index of the todo by subtracting 1 from the id.
 *
 *  DO NOT MUTATE the original state array, nor any objects within it.
 *
 *  TIP: `Array.map` is a convenient way to make a copy of an array -- compare
 *       the Todo IDs and map the existing Todo if it is not the one that was
 *       just updated, and map the updated array if it is.
 *  TIP: When calling fetch, be sure to SERIALIZE the updates in the body with JSON.stringify()
 *       And specify the "Content-Type" header as "application/json"
 */

// ----------- HINTS!!!!!!!!! ------------
/* useEffect:
 *  Use fetch to send a GET request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *  update state with the received todos.
 *  Handle errors correctly and set `error` to any error or error status code.
 *  Set `isLoading` to false when all network activity is finished.
 */

/* addTodo:
 *  Use fetch to send a POST request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *    - set the Todos to a new array with the added Todo concatenated
 *    - handle errors appropriate (as mentioned above)
 *
 *  DO NOT MUTATE the original state array, nor any objects within it.
 *
 *  TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
 *       with JSON.stringify() and specify the "Content-Type" header as "application/json"
 *  TIP: The "(prev) =>" version of the state setter function might be convenient
 *  TIP: Use Array.prototype.concat to create a new array containing the contents
 *       of the old array, plus the object returned by the server.
 */
