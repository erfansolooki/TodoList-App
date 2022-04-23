import { useState } from "react";
import styles from "./Navbar.module.css";
import Select from "react-select";

const Navbar = ({ unCompletedTodo, filterTodos, status, setStatus }) => {
  const changeHandler = (selectedOptions) => {
    setStatus(selectedOptions);
    filterTodos(selectedOptions.value);
  };

  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  if (!unCompletedTodo) return <>Set you're Today Todo's !</>;
  return (
    <div className={styles.navbar}>
      <>
        <span className={styles.span}>{unCompletedTodo}</span>
        Todo's are Uncompleted
      </>
      <Select
        defaultValue={status}
        onChange={changeHandler}
        options={options}
        className={styles.select}
      />
    </div>
  );
};

export default Navbar;
