import React, { useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { meta, socialprofils } from "../content_option";
import { Socialicons } from "../components/socialicons";
const Footermain = () => {
  const [isActive, setActive] = useState("false");

  return (
    <>
      <footer className="site__footer">
        <Link to="/">{meta.title}</Link>
        <p>{meta.description}</p>
        <Socialicons />
        <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
          <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.youtube}>Youtube</a>
            <a href={socialprofils.twitter}>Twitter</a>
          </div>
          <p className="copyright m-0">copyright 2023 {meta.title}</p>
        </div>
      </footer>
    </>
  );
};

export default Footermain;
