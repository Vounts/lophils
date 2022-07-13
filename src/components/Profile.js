import React from "react";
import styles from "../styles/Profile.module.css";
export default function Profile({ initials }) {
  return <div className={styles.circle}>{initials}</div>;
}
