import React from "react";
import styles from "../styles/Navbar.module.css";
// Import icons from react-icons
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Sotheara Thun
      </a>
      
      <div className={styles.navItems}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#experience" className={styles.navLink}>Experience</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
      </div>

      <div className={styles.socialIcons}>
        <a href="mailto:thunsotheara01@gmail.com" className={styles.iconLink} target="_blank">
          <HiMail />
        </a>
        <a href="https://github.com/sothearathun" className={styles.iconLink} target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};