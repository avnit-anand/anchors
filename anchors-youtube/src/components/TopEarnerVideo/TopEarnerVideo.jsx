import React from "react";
import styles from "./TopEarnerVideo.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

const TopEarnerVideo = () => {
  let expectedEarning = 124791;
  let title = "Avnit Kumar Anand";
  let view = 123124;
  let like = 1234;
  let comment = 234;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail_updatedDate}></div>
      <div className={styles.title_count}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.parentDiv}>
          <span className={styles.iconContainer}>
            <VisibilityIcon />
          </span>
          <span>{view}</span>
        </div>
        <div className={styles.parentDiv}>
          <span>
            <ThumbUpIcon />
          </span>
          <span> {like}</span>
        </div>
        <div className={styles.parentDiv}>
          <span>
            <ModeCommentIcon />
          </span>
          <span> {comment}</span>
        </div>
      </div>
      <div className={styles.earning}>
        <span>₹ </span>
        <span>{expectedEarning}</span>
      </div>
    </div>
  );
};

export default TopEarnerVideo;
