import axios from "axios";
import  { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos/";

  const fetchTodos = async () => {
    try {
      const response = await axios.get(url);

      setTodos(response?.data);
    } catch (error) {
      console.error("Error occurred while fetching todos", error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${url}${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error occurred while deleting todo", error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>To-do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? 'Completed' : 'Pending'}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
