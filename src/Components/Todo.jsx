import "../App.css";

const Todo = ({ todo, onComplete, Delete, onEdit }) => {
  return (
    <div className="todo">
      <div className={`todoText ${todo.isCompleted ? "completed" : ""}`}>
        {todo.text}
      </div>
      <div className="buttons">
        <button className="btn edit" onClick={onEdit}>
          Edit
        </button>
        <button className="btn complete" onClick={onComplete}>
          Complete
        </button>
        <button className="btn remove" onClick={Delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
