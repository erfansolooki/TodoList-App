import Todo from "./Todo";
import TodoFrom from "./TodoForm";
import { useState } from "react";

const TodoList = ({ todos, onComplete2, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodo = () => {
    if (todos.length === 0)
      return <p className="p">please add you're todo's</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete2(todo.id)}
          Delete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? <TodoFrom submitTodo={editTodo} edit={edit} /> : renderTodo()}
    </div>
  );
};

export default TodoList;
