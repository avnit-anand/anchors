import React from "react";
import styles from "./EarningPage.module.css";
import RequestCallBackPopup from "../../components/RequestCallBackPopup/RequestCallBackPopup";

const EarningPage = ({ isButtonClicked }) => {
  return (
    <div className={styles.earningPageContainer}>
      {isButtonClicked && (
        <div className={styles.popup}>
          <RequestCallBackPopup />
        </div>
      )}
    </div>
  );
};

export default EarningPage;
