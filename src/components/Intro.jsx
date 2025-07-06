import React from "react";
import styles from "../styles/Intro.module.css";
import { HiMail } from "react-icons/hi";
import { getImageUrl } from "../utils.js";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Tree/Dandelion Image */}
        <div className={styles.imageContainer}>
          <img 
            src="/assets/coolpixel/coolpixel.gif"
            alt="Tree illustration" 
            className={styles.heroImage}
          />
        </div>

        {/* Main heading */}
        <h1 className={styles.title}>
          <span className={styles.greeting}>hi, </span>
          <span className={styles.name}>theara</span>
          <span className={styles.here}> here.</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          I create stuff sometimes.
        </p>

        {/* Description */}
        <p className={styles.description}>
          A Computer Science student at Paragon International University, who is fascinated by the intersection of technology and creativity.
        </p>

        {/* CTA Button */}
        <a href="mailto:thunsotheara01@example.com" className={styles.ctaButton}>
          <HiMail className={styles.mailIcon} />
          Say hi!
        </a>
      </div>
    </section>
  );
};