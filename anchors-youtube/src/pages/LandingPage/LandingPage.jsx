import React from "react";
import styles from "./LandingPage.module.css";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent";

const LandingPage = ({onButtonClick}) => {
  return (
    <div className={styles.landingPageContentContainer}>
      <LandingPageContent onButtonClick={onButtonClick}/>
    </div>
  );
};

export default LandingPage;
