import React from "react";
import styles from "./RequestACallBackButton.module.css";
import CallIcon from "@mui/icons-material/Call";

const RequestACallBackButton = ({handleClick}) => {
  return (
    <>
        <span className={styles.inputField} onClick={handleClick}>
          <CallIcon fontSize="1.125vw" style={{ verticalAlign: "middle" }} />
          <span className={styles.text}>Request a call back</span>
        </span>
    </>
  );
};

export default RequestACallBackButton;
