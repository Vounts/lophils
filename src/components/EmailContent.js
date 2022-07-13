import React from "react";
import { generateEmail } from "../lib/Random";
import TagList from "./TagList";
import styles from "../styles/EmailContent.module.css";
import { ISOtoHumanDateTime2, ISOtoHumanDateTime3 } from "../lib/DateTool";
export default function EmailContent({ email }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.sender}>{email.sender}</div>
        <div className={styles.taglist}>
          <TagList tags={email.tags} />
        </div>
      </div>

      <div className={styles.date}>{ISOtoHumanDateTime2(email.date, 0)}</div>

      <div className={styles.content}>{email.content}</div>
      <div className={styles.additional}>
        <div>------Forwarded message-----</div>
        <div className={styles.row}>
          <div>From:</div>
          <div className={styles.sender}>{email.sender} &nbsp;</div>
          <div className={styles.email}>{`<${email.email}>`} &nbsp;</div>
        </div>
        <div>Date: {ISOtoHumanDateTime3(email.date, 0)} </div>
        <div>Subject: {email.subject}</div>
        <div className={styles.row}>
          <div>To: {`${email.receiver}`} &nbsp;</div>
          <div className={styles.email}>{`<${generateEmail(
            email.receiver
          )}>`}</div>
        </div>
      </div>
    </div>
  );
}
