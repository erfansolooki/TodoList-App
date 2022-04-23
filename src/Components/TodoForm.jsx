import { useEffect, useRef, useState } from "react";

const TodoFrom = (props) => {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ""
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // add entered todo to the todo's component
    if (!inputValue) {
      alert("please enter todo's");
      return;
    }
    props.submitTodo(inputValue);

    // empty input when any todo's entered
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          placeholder={props.edit ? "Update Todo..." : "Add New Todo..."}
          ref={inputRef}
        />
        <button className={props.edit ? "btn update" : "btn add"} type="submit">
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoFrom;
