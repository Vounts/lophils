import React, { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import EmailTools from "./components/EmailTools";
import styles from "./styles/App.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import dummyEmails from "./data/dummy.json";

const LOCAL_STORAGE_KEY = "emailApp.email";

function App() {
  const [CheckedAll, setCheckedAll] = useState(false);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (stored.length > 0) {
      setEmails(
        stored.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
      );
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dummyEmails));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(emails));
  };

  const handleReset = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dummyEmails));
    window.location.reload();
  };

  const handleCheckBoxAll = () => {
    if (CheckedAll === false) {
      emails.forEach((email) => {
        email.checked = true;
      });
    } else {
      emails.forEach((email) => {
        email.checked = false;
      });
    }

    let checker = emails.every((email) => email.checked);
    setCheckedAll(checker);
  };

  const handleDelete = () => {
    const newEmails = emails.filter((email) => !email.checked);
    setEmails(newEmails);
  };

  const toggleCheck = (id) => {
    const newEmails = [...emails];
    const email = newEmails.find((email) => email.id === id);
    email.checked = !email.checked;
    setEmails(newEmails);
  };

  return (
    <div className="App">
      <EmailTools
        current={100}
        max={100}
        handleCheckBoxAll={() => handleCheckBoxAll()}
        checkedAll={CheckedAll}
        handleDelete={() => handleDelete()}
        handleSave={() => handleSave()}
        handleReset={() => handleReset()}
      />
      <div className={styles.row}>
        <div className={styles.unread}>unread</div>
        <div className={styles.totalUnread}>
          {emails.length} <MdKeyboardArrowDown />
        </div>
      </div>
      {emails.length > 0 ? (
        <EmailList
          toggleCheck={toggleCheck}
          checkedAll={CheckedAll}
          emails={emails}
        />
      ) : (
        <div style={{ fontSize: "25px", margin: "1%" }}>No results found</div>
      )}
    </div>
  );
}

export default App;
