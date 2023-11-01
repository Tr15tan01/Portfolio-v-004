import React, { useEffect, useRef } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "./css/App.css";
import "./navigation.css";
// import "./js/navbar-scroll.js";
// import "./js/mouseMove.js";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import HTMLLogo from "./media/html5.svg";
import CSSLogo from "./media/css3.svg";
import JavascriptLogo from "./media/javascript.svg";
import GitLogo from "./media/Git.svg";
import PhpLogo from "./media/php.svg";
import ReactLogo from "./media/react.svg";
import NodeLogo from "./media/NodeJS.svg";
import MysqlLogo from "./media/mysql.svg";
import MongodbLogo from "./media/mongodb.svg";
import BootstrapLogo from "./media/bootstrap.svg";
import GoogleAnalyticsLogo from "./media/google-analytics.svg";
import SASSLogo from "./media/sass.svg";
import GithubLogo from "./media/github.svg";
import MaterialLogo from "./media/material.svg";
import AWSLogo from "./media/aws.svg";
import me from "./media/me.jpg";

function App() {
  const menuBars = useRef(null);
  // const menuBars = document.getElementById("menu-bars");
  // const overlay = document.getElementById("overlay");
  const overlay = useRef(null);
  // const nav1 = document.getElementById("nav-1");
  const nav1 = useRef(null);
  const nav2 = useRef(null);
  const nav3 = useRef(null);
  const nav4 = useRef(null);
  const nav5 = useRef(null);
  // const nav2 = document.getElementById("nav-2");
  // const nav3 = document.getElementById("nav-3");
  // const nav4 = document.getElementById("nav-4");
  // const nav5 = document.getElementById("nav-5");
  const navItems = [nav1, nav2, nav3, nav4, nav5];

  // Control Navigation Animation
  function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
      nav.current.classList.replace(
        `slide-${direction1}-${i + 1}`,
        `slide-${direction2}-${i + 1}`
      );
    });
  }

  function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.current.classList.toggle("change");
    // Toggle: Menu Active
    overlay.current.classList.toggle("overlay-active");
    if (overlay.current.classList.contains("overlay-active")) {
      // Animate In - Overlay
      overlay.current.classList.replace(
        "overlay-slide-left",
        "overlay-slide-right"
      );
      // Animate In - Nav Items
      navAnimation("out", "in");
    } else {
      // Animate Out - Overlay
      overlay.current.classList.replace(
        "overlay-slide-right",
        "overlay-slide-left"
      );
      // Animate Out - Nav Items
      navAnimation("in", "out");
    }
  }

  // Event Listeners
  // menuBars && menuBars.addEventListener("onClick", toggleNav);

  useEffect(() => {
    navItems.forEach((nav) => {
      nav.current.addEventListener("click", toggleNav);
    });

    return () => {
      // const navbla = nav1;
      const newNavItems = navItems;
      newNavItems.forEach((nav) => {
        nav.current.removeEventListener("click", toggleNav);
      });
    };
  });

  return (
    <>
      {/* // <!-- Menu Overlay --> */}
      <div className="overlay overlay-slide-left" id="overlay" ref={overlay}>
        {/* <!-- Menu Items --> */}
        <nav>
          <ul>
            <li id="nav-1" className="slide-out-1" ref={nav1}>
              <a href="#home">Home</a>
            </li>
            <li id="nav-2" className="slide-out-2" ref={nav2}>
              <a href="#about">About</a>
            </li>
            <li id="nav-3" className="slide-out-3" ref={nav3}>
              <a href="#skills">Skills</a>
            </li>
            <li id="nav-4" className="slide-out-4" ref={nav4}>
              <a href="#projects">Projects</a>
            </li>
            <li id="nav-5" className="slide-out-5" ref={nav5}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* // <!-- Menu Bars --> */}
      <div
        className="menu-bars"
        id="menu-bars"
        ref={menuBars}
        onClick={toggleNav}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {/* // <!-- Sections --> */}
      <section id="home">
        <a href="/">TristanVaramashvili.dev</a>
        <div className="centered-avatar">
          <h3>Hi I am Tristan Varamashvili</h3>
          {/* <img
            className="avatar"
            alt="Avatar Tristan Varamashvili"
            src={me}
            loading="lazy"
          /> */}
          <LazyLoadImage
            className="avatar"
            alt="Avatar Tristan Varamashvili"
            src={me} // use normal <img> attributes as props
            effect="blur"
            beforeLoad={() => console.log("Good Luck!")}
            delayTime={1500}
          />
          <h3>Full Stack Web Developer</h3>
        </div>
      </section>
      <section id="about">
        <div className="centered">
          <h1>More About Me</h1>
          <p className="padded">
            I am skilled programmer in modern front end and server side
            languages. Currently working on many live projects with several
            users. I have developed, deployed and maintained projects with
            several languages and Technologies keeping them up to date on
            different hosting proviers.
          </p>
        </div>
      </section>
      <section id="skills">
        <div className="centered">
          <h1>Skills</h1>
          <h3>Languages, Technologies And Libraries I work with:</h3>

          <div className="wrapper">
            <div className="centered">
              <ul className="skills">
                <li>
                  <img src={HTMLLogo} alt="htllogo" /> HTML
                </li>
                <li>
                  <img src={CSSLogo} alt="Css logo" />
                  CSS
                </li>
                <li>
                  <img src={JavascriptLogo} alt="Javascript logo" />
                  JavaScript
                </li>
                <li>
                  {" "}
                  <img src={GitLogo} alt="Git logo" />
                  Git
                </li>

                <li>
                  <img src={ReactLogo} alt="React logo" />
                  React
                </li>
                <li>
                  <img src={PhpLogo} alt="PHP logo" />
                  PHP
                </li>

                <li>
                  <img src={NodeLogo} alt="Node logo" />
                  Node JS
                </li>
                <li>
                  <img src={MysqlLogo} alt="Mysql logo" />
                  SQL
                </li>
                <li>
                  <img src={MongodbLogo} alt="Mongodb logo" />
                  MongoDB
                </li>
              </ul>
            </div>
            {/* second column */}
            <div className="centered">
              <ul className="skills">
                <li>
                  <img src={BootstrapLogo} alt="Bootstrap Logo" /> Bootstrap
                </li>
                <li>
                  <img src={GoogleAnalyticsLogo} alt="Google Analytics logo" />
                  Analytics
                </li>
                <li>
                  <img src={SASSLogo} alt="Javascript logo" />
                  SASS
                </li>
                <li>
                  {" "}
                  <img src={GithubLogo} alt="Github logo" />
                  GitHub
                </li>

                <li>
                  <img src={SASSLogo} alt="Figma logo" />
                  Figma
                </li>

                <li>
                  <img src={ReactLogo} alt="React logo" />
                  React
                </li>
                <li>
                  <img src={NodeLogo} alt="Node logo" />
                  Express JS
                </li>
                <li>
                  <img src={MaterialLogo} alt="Material logo" />
                  Material UI
                </li>
                <li>
                  <img src={AWSLogo} alt="AWS logo" />
                  AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
