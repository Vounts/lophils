import React from "react";
import styles from "../styles/DateBox.module.css";
export default function DateBox({ number, date }) {
  return (
    <div className={styles.box}>
      <div className={styles.number}>{number}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}
