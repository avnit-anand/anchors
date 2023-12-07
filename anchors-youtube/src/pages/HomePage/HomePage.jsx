import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import EarningPage from "../EarningPage/EarningPage";
import styles from "./HomePage.module.css";
import PlayButtonLogo from "../../components/LandingPageContent/PlayButtonLogo/PlayButtonLogo";

const HomePage = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const switchComponent = () => {
    setShowLandingPage(!showLandingPage);
    setShowBottomDesign(!showBottomDesign);
  };

  const [showBottomDesign, setShowBottomDesign] = useState(true);

  const [callButtonClick, setCallButtonClick] = useState(false);
  function handleClickButton() {
    if (callButtonClick) {
      setCallButtonClick(false);
    } else {
      setCallButtonClick(true);
    }
  }
  console.log("outer" + callButtonClick);
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageContent}>
        <NavBar
          isButtonClicked={!showLandingPage}
          handleClick={handleClickButton}
        />
        {showLandingPage ? (
          <LandingPage onButtonClick={switchComponent} />
        ) : (
          <EarningPage isButtonClicked={callButtonClick} />
        )}
        {showBottomDesign ? (
          <div className={styles.playButtonLogoContainer}>
            <PlayButtonLogo />
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default HomePage;
