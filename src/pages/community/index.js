import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion } from "framer-motion";

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

export const Community = () => {
  return (
    <HelmetProvider>
      <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Community | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <motion.div className="back" variants={backVariants}>
            <Row className="mb-5 mt-3">
              <Col lg="8">
                <h1 className="display-4 mb-4"> Our Community</h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
          </motion.div>
          <motion.div className="back" variants={imageVariants}>
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.desctiption}</p>
                      <a href={data.link}>view project</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </HelmetProvider>
  );
};
