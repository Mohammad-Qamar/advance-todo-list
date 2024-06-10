import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState(""); //normal array
  //const [todo, setTodo] = useState({ name: "", done: false }); // now we are storing every item as an object
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); // shuffle them for showing recent feed data..
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {" "}
        <input
          className={styles.moderninput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter Something ..."
        />
        <div className={styles.inputContainer}>
          <button
            className={styles.modernbutton}
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
