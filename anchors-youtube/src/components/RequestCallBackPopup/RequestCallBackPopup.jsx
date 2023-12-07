import React from "react";
import styles from "./RequestCallBackPopup.module.css";

const RequestCallBackPopup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Request a call back</span>
      </div>
      <div>
        <input className={styles.input} type="text" placeholder="Enter Name" />
      </div>
      <div>
        <input
          className={styles.input}
          type="tel"
          placeholder="Mobile Number"
        />
      </div>
      <div>
        <span className={styles.button}>Request a call back</span>
      </div>
    </div>
  );
};

export default RequestCallBackPopup;
