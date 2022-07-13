import React from "react";
import Button from "./Button";
import { IoMdSave } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { RiFilterFill } from "react-icons/ri";
import styles from "../styles/Navbar.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BiReset } from "react-icons/bi";
export default function EmailTools({
  current,
  max,
  handleCheckBoxAll,
  checkedAll,
  handleDelete,
  handleSave,
  handleReset,
}) {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={checkedAll}
        onChange={handleCheckBoxAll}
      />
      <Button
        name={`Save`}
        icon={IoMdSave}
        bgColor={`rgb(237,248,245)`}
        borderColor={`rgb(105,177,121)`}
        onClick={handleSave}
      />
      <Button
        name={`manage filters`}
        icon={RiFilterFill}
        bgColor={`white`}
        borderColor={`rgb(118,118,118)`}
      />
      <Button
        name={`Delete`}
        icon={TiDelete}
        bgColor={`rgb(252,241,241)`}
        borderColor={`rgb(226,102,95)`}
        onClick={handleDelete}
      />
      <Button
        name={`Reset`}
        icon={BiReset}
        bgColor={`rgb(255, 255, 200)`}
        borderColor={`rgb(255, 165, 0)`}
        onClick={handleReset}
      />
      <div className={styles.pages}>
        <MdKeyboardArrowLeft className={styles.arrow} />
        {current} of {max} <MdKeyboardArrowRight className={styles.arrow} />
      </div>
    </div>
  );
}
