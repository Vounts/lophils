import React from "react";
import styles from "../styles/Email.module.css";
import DateBox from "./DateBox";
import Profile from "./Profile";
import { BsPaperclip } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  MdCircle,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { ISOtoHumanDateTime } from "../lib/DateTool";
import { months2 } from "../lib/DateTool";
import { timeDifference } from "../lib/DateTool";

export default function EmailHeader({
  email,
  clipNumber,
  showContent,
  handleShowContent,
  checked,
  handleCheckBox,
}) {
  function StopPropagate(e) {
    e.stopPropagation();
  }

  return (
    <div className={styles.cardHeader} onClick={handleShowContent}>
      <BiGridVertical
        className={styles.grid}
        onClick={(e) => StopPropagate(e)}
      />
      <input
        type="checkbox"
        value="test"
        className={styles.checkBox}
        onClick={(e) => StopPropagate(e)}
        onChange={handleCheckBox}
        checked={checked}
        style={{ cursor: "pointer" }}
      />
      <MdCircle className={styles.greenCircle} color={`green`} />
      <DateBox
        number={new Date(email.date).getDate()}
        date={months2[new Date(email.date).getMonth()]}
      />
      <Profile initials={`TA`} />
      <div className={styles.col}>
        <div className={styles.subject}>Fwd: {email.subject}</div>
        <div className={styles.row}>
          <div className={styles.sender}>{email.sender}</div>
          <div className={styles.email}>{`<${email.email}>`}</div>
          <div className={styles.date}>
            {ISOtoHumanDateTime(email.date, 0)} &nbsp; |{" "}
          </div>
          <div className={styles.date}>
            {ISOtoHumanDateTime(email.date, -1)} &nbsp; |{" "}
          </div>
          <div className={styles.clip}>
            <BsPaperclip /> {clipNumber}
          </div>
        </div>
      </div>
      <div className={styles.clock}>
        <AiOutlineClockCircle style={{ fontSize: "16px" }} />{" "}
        {timeDifference(new Date(), new Date(email.date))}
      </div>
      {showContent ? (
        <MdKeyboardArrowDown className={styles.arrow} />
      ) : (
        <MdKeyboardArrowRight className={styles.arrow} />
      )}
    </div>
  );
}
