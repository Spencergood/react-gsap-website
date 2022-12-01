import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Community } from "../pages/community";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Research } from "../pages/research";
//import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AnimatePresence } from "framer-motion";

const AnimatedSwitch = withRouter(({ location }) => (
  <AnimatePresence exitBeforeEnter>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route path="/research" component={Research} />
      <Route path="/contact" component={ContactUs} />
      <Route path="*" component={Home} />
    </Switch>
  </AnimatePresence>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
    </div>
  );
}

export default AppRoutes;
