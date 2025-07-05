import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils.js";

export const Navbar = () => {

   const menuIconUrl = getImageUrl("nav/menuIcon.png");
  console.log("Menu icon URL:", menuIconUrl);

  return <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
      <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-btn" />
      <ul className={styles.menuItems}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
  </nav>;
};