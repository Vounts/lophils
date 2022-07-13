import React from "react";
//import dummyEmails from "../data/dummy.json";
import Email from "./Email";
import { rand } from "../lib/Random";
export default function EmailList({ checkedAll, emails, toggleCheck }) {
  return emails.map((email, idx) => {
    return (
      <Email
        key={email.id}
        email={email}
        clipNumber={rand(1, 5)}
        checkedAll={checkedAll}
        toggleCheck={toggleCheck}
      />
    );
  });
}
