/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/header.module.scss"

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <FontAwesomeIcon
          icon={faSun}
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faMoon}
          className="w-7 h-7"
          role="banner"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
      <Container>
        <div className={styles.gradientbox}>
          <div className="text-xl flex items-center">
            <Link href="/">Research Rhinos</Link>
          </div>
          <div className="flex flex-row items-center text-gray-600 dark:text-gray-100">
            <span className="mr-4">
              <Link href="/">Home</Link>
            </span>
            <span className="mr-4">
              <Link href="/about">About</Link>
            </span>
            <span className="mr-4">
              <Link href="/team">Team</Link>
            </span>
            <span className="mr-4">
              <Link href="/programs">Programs</Link>
            </span>
          </div>
          <div className="flex flex-row items-center py-3">
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 mr-4">
              {renderThemeChanger()}
            </button>
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gradient-to-r from-orange-600  to-amber-400 rounded text-base mt-4 md:mt-0 mr-4">
              <Link href="/login">Login</Link>
            </button>
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gradient-to-r from-orange-600  to-amber-400 rounded text-base mt-4 md:mt-0">
              <Link href="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
