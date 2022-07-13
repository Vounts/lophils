import React, { useState } from "react";
import { rand } from "../lib/Random";
import styles from "../styles/Email.module.css";

import EmailContent from "./EmailContent";
import EmailHeader from "./EmailHeader";
export default function Email({ email, checkedAll, toggleCheck }) {
  const [ShowContent, setShowContent] = useState(false);
 
  const handleShowContent = () => {
    setShowContent(!ShowContent);
  };

  const handleCheckBox = () => {
    toggleCheck(email.id);
  };

  return (
    <div className={styles.card}>
      <EmailHeader
        email={email}
        clipNumber={rand(1, 5)}
        showContent={ShowContent}
        handleShowContent={() => handleShowContent()}
        checked={Boolean(email.checked)}
        handleCheckBox={handleCheckBox}
      />
      {ShowContent ? <EmailContent email={email} /> : <div></div>}
    </div>
  );
}
