import React, { useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import bgImg1 from "../../images/home-first-bg.png";
import bgImg2 from "../../images/cancer-homepage.png";
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export const Home = () => {
  return (
    <HelmetProvider>
      <div id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <motion.div
          className="single"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <motion.div className="pagemotion" variants={imageVariants}>
            <div class="animation-window">
              <div
                className="first-bg"
                style={{ backgroundImage: `url(${bgImg1})` }}
              ></div>
            </div>

            <div className="intro_sec d-block d-lg-flex align-items-center ">
              <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                <div className="align-self-center ">
                  <div className="intro mx-auto">
                    <h2 className="mb-1x">{introdata.title}</h2>

                    <div className="container">
                      <div className="wrapper">
                        <h5 className="intro" ref={(el) => (intro = el)}>
                          <b>Lustgarten</b>-funded science has been a driving
                          force in every major development in pancreatic cancer
                          research since our founding in 1998.
                        </h5>
                      </div>
                    </div>

                    <p className="mb-1x">{introdata.description}</p>
                    <div className="intro_btn-action pb-5">
                      <Link to="/community" className="text_2">
                        <div id="button_p" className="ac_btn btn ">
                          Our Community
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};
