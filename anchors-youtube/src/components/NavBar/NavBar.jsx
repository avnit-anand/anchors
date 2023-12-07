import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import RequestACallBackButton from "../RequestACallBackButton/RequestACallBackButton";
const NavBar = ({ isButtonClicked , handleClick}) => {
  return (
    <div className={styles.navBar}>
      <Logo />
      {isButtonClicked && (
        <RequestACallBackButton handleClick={handleClick} />
      )}
    </div>
  );
};

export default NavBar;
