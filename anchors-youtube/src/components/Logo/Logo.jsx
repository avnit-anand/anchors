import React from "react";
import backgroundImage from "../../assets/images/logo.png";
import styles from './Logo.module.css'
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={backgroundImage} alt="Logo" className={styles.logoImage}/>
      <span className={styles.logoTitle}>anchors</span>
      <span className={styles.logoBeta}>Beta</span>
    </div>
  );
};

export default Logo;
