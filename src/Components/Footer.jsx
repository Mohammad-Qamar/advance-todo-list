import React from "react";
import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.Citem}>
        Completed Task:{completedTodos}
        <span className={styles.Citem}>Total Task:{totalTodos}</span>
      </span>
    </div>
  );
}
