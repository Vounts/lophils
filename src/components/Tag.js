import React from "react";
import styles from "../styles/Tag.module.css";
export default function Tag({ tag }) {
  return <div className={styles.box}>{tag}</div>;
}
