import React from "react";
import styles from "./PlayButtonLogo.module.css";
import playButtonLogo from "../../../assets/images/play.png";

const PlayButtonLogo = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.play}></div>
    </div>
  );
};

export default PlayButtonLogo;
