import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import menuImg from "../images/menu-img.png";
import {
  menuLinksShow,
  menuLeftShow,
  menuRightShow,
  showInfo,
  menuHide,
  navHide,
  menuInfoHide,
  staggerLinks,
  hoverLink,
  hoverExit
} from "./Animate";

const Menu = ({ state, toggleLogoColors }) => {
  //create refs for our DOM elements

  let menuWrapper = useRef(null);
  let show1 = useRef(null);
  let show2 = useRef(null);
  let show3 = useRef(null);
  let info = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      navHide(show3);
      menuInfoHide(info);
      menuHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([show1, show2, show3], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      gsap.to([info], {
        duration: 0,
        opacity: 1
      });
      menuLinksShow(show3);
      menuLeftShow(show1);
      menuRightShow(show2);
      // showInfo(menuBttn);
      showInfo(info);
      staggerLinks(line1, line2, line3);
    }
    toggleLogoColors();
  }, [state]);

  return (
    <div ref={(el) => (menuWrapper = el)} className="hamburger-menu">
      <div ref={(el) => (show1 = el)} className="menu-right-background"></div>
      <div ref={(el) => (show2 = el)} className="menu-left-background"></div>
      <div ref={(el) => (show3 = el)} className="menu-layer">
        <div className="container">
          <div className="main-menu-wrapper">
            <div className="menu-links">
              <nav>
                <div className="mwrapper">
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={(e) => hoverLink(e)}
                        onMouseOut={(e) => hoverExit(e)}
                        ref={(el) => (line1 = el)}
                        to="/research"
                      >
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => hoverLink(e)}
                        onMouseOut={(e) => hoverExit(e)}
                        ref={(el) => (line2 = el)}
                        to="/letter"
                      >
                        Letter
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => hoverLink(e)}
                        onMouseOut={(e) => hoverLink(e)}
                        ref={(el) => (line3 = el)}
                        to="/financials"
                      >
                        Financials
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div ref={(el) => (info = el)} className="menu-info">
                <div className="mwrapper">
                  <div className="menu-img">
                    <img
                      src={menuImg}
                      alt="Scientist looking through microscope lens."
                    />
                  </div>
                  <p>100% OF DONATIONS FUND PANCREATIC CANCER RESEARCH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
