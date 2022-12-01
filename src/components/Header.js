import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { withRouter, Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { textIntro, lightMenuCon, darkMenuCon } from "./Animate";

const Header = ({ history }) => {
  let logo = useRef(null);
  let menuBttn = useRef(null);
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //When the component mounts
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  //toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  const toggleLogoColors = () => {
    if (state.initial === false) {
      darkMenuCon(menuBttn, logo);
    } else if (state.clicked === true) {
      lightMenuCon(menuBttn, logo);
    } else if (state.clicked === false) {
      darkMenuCon(menuBttn, logo);
    }
  };

  // check if out button is disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const location = useLocation();
  if (location.pathname == "/") {
    var locationClass = "home";
  } else {
    var locationClass = "not-home";
  }
  const handleHeader = () => {
    handleMenu();
    toggleLogoColors();
  };
  return (
    <header className={locationClass}>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link ref={(el) => (logo = el)} to="/">
                Lustgarten.
              </Link>
            </div>
            <div className="menu">
              <button
                ref={(el) => (menuBttn = el)}
                disabled={disabled}
                onClick={handleHeader}
              >
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} toggleLogoColors={toggleLogoColors} />
    </header>
  );
};

export default withRouter(Header);
