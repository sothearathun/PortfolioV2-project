import React from "react";
import styles from "../styles/Credits.module.css";

export const Credits = () => {
  return (
    <div id="credits" className={styles.footer}>
      <div className={styles.endingCredits}>
        <div>Built and designed by Sotheara Thun.</div>
        <div>All rights reserved. ©</div>
      </div>
    </div>
  );
};

