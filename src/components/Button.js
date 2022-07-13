import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({ name, icon, bgColor, borderColor, onClick }) {
  return (
    <button
      style={{
        color: borderColor,
        borderColor: borderColor,
        backgroundColor: bgColor,
      }}
      className={styles.box}
      onClick={onClick}
    >
      {name}

      <div className={styles.icon}>{icon()}</div>
    </button>
  );
}
