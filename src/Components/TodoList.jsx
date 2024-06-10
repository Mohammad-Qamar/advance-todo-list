import Todoitem from "./Todoitem";
import styles from "./form.module.css";
export default function TodoList({ todos, setTodos }) {
  //logic for sorting arrays of todos
  const SortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {/* //now using sorted array instead of Todos here */}
      {SortedTodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
