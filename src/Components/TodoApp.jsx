import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  // creat new state cause we want to have all prev state and do not remove them
  // for update the state we pass the state(todo's) to new state(filteredTodo's)
  const [filteredTodos, setFilteredTodos] = useState([]);
  // lifting-up state cause we want to access all value
  const [status, setStatus] = useState("All");
  useEffect(() => {
    filterTodos(status.value);
  }, [todos, status]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // item => findIndex => clone => !isCompleted
    // find index that we clicked on
    const findIndex = todos.findIndex((index) => index.id === id);

    // clone that index we clicked
    const cloneIndex = { ...todos[findIndex] };

    cloneIndex.isCompleted = !cloneIndex.isCompleted;

    const cloneTodos = [...todos];

    cloneTodos[findIndex] = cloneIndex;

    setTodos(cloneTodos);
  };

  const removeHandler = (id) => {
    const removeTodos = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodos);
  };

  const UpdateTodo = (id, newValue) => {
    const findIndex = todos.findIndex((index) => index.id === id);

    const cloneIndex = { ...todos[findIndex] };

    cloneIndex.text = newValue;

    const cloneTodos = [...todos];

    cloneTodos[findIndex] = cloneIndex;

    setTodos(cloneTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="container">
      <Navbar
        unCompletedTodo={todos.filter((todo) => !todo.isCompleted).length}
        filterTodos={filterTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoFrom submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete2={completeTodo}
        onDelete={removeHandler}
        onUpdateTodo={UpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
