import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter
} from "react-router-dom";
import AppRoutes from "./routes";

import Header from "../components/Header";
import Footer from "../components/Footer";
//import Headermain from "../header";
//import AnimatedCursor from "react-animated-cursor";
import "./App.css";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />

        <div className="container">
          <div className="wrapper">
            <div className="home">
              <AppRoutes />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
