import styles from "./list.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button Clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleMark(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const lined = item.done ? styles.Marked : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={lined} onClick={() => handleMark(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteitem}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
