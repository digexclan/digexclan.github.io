/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/header.module.scss"
import Image from "next/image";
import DigexLogo from "../public/Digex-logo.png"
import { TRUE } from "sass";

function Header() {
  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");
  // const navLink = document.querySelectorAll(".nav-link");

  // hamburger.addEventListener("click", mobileMenu);
  // navLink.forEach(n => n.addEventListener("click", closeMenu));

  // function mobileMenu() {
  //     hamburger.classList.toggle("active");
  //     navMenu.classList.toggle("active");
  // }

  // function closeMenu() {
  //     hamburger.classList.remove("active");
  //     navMenu.classList.remove("active");
  // }

  return (
    <div>
      <Container>
        <div className={styles.gradientbox}>
          <div className="text-xl flex items-center w-64 h-16">
            <Link href="/" passHref>
              <Image src={DigexLogo} alt="DigexLogo"/>
            </Link>
          </div>
          <div className={styles.navMenu}>
            <span className="navLink md:mr-4 mr-10 md:mt-0 mt-0 dark:text-gray-100">
              <Link href="/">Home</Link>
            </span>
            <span className="navLink mr-4 dark:text-gray-100">
              <Link href="/about">About</Link>
            </span>
            <span className="navLink mr-4 dark:text-gray-100">
              <Link href="/members">Members</Link>
            </span>
            <span className="navLink mr-4 dark:text-gray-100">
              <Link href="/alumni">Alumni</Link>
            </span>
            <span className="navLink dark:text-gray-100">
              <Link href="/gallery">Gallery</Link>
            </span>
          </div>
          <div className={styles.hamburger}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          {/* <div className="flex flex-row items-center py-3">
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 mr-4">
              {renderThemeChanger()}
            </button>
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gradient-to-r from-orange-600  to-amber-400 rounded text-base mt-4 md:mt-0 mr-4">
              <Link href="/login">Login</Link>
            </button>
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gradient-to-r from-orange-600  to-amber-400 rounded text-base mt-4 md:mt-0">
              <Link href="/signup">Sign Up</Link>
            </button>
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default Header;
