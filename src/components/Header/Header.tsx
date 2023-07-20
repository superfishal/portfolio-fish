import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "./images/superfishal_logo.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Image
            fill
            src={logo}
            alt="cool logo"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <ul className={styles.navLinks}>
          <li>link1</li>
          <li>link2</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
