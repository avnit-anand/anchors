import React from "react";
import styles from "./LandingPageContent.module.css";
// import getChannelVideos from "../../logic/YoutubeVideoList";
const LandingPageContent = ({ onButtonClick }) => {
  const handleClick = () => {
    onButtonClick();
    // getChannelVideos();
  };
  return (
    <div className={styles.landingPageContentContainer}>
      <div className={styles.content}>
        <p className={styles.title}>Discover your earning potential</p>
        <p className={styles.tagLine}>
          Turn your Youtube expertise into a lucrative income through resource
          sharing
        </p>
      </div>
      <div className={styles.inputAndButton}>
        <div className={styles.inputFeildContainer}>
          <input
            type="text"
            placeholder="enter your video link"
            className={styles.inputField}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleClick}></button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
