"use client";
import Link from "next/link";
import styles from "./BurgerMenu.module.css";
import { useState } from "react";

const BurgerMenu = ({ children }) => {
  const [burgerOpen, setBurgerOpen] = useState(true);
  const toggleBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  };
  return (
    <>
      <div className={styles.burgerMenu} onClick={toggleBurgerMenu}>
        <span className={burgerOpen ? styles.span_active : styles.span}></span>
        <span className={burgerOpen ? styles.span_active : styles.span}></span>
        <span className={burgerOpen ? styles.span_active : styles.span}></span>
        <span className={burgerOpen ? styles.span_active : styles.span}></span>
      </div>
    </>
  );
};

export default BurgerMenu;
