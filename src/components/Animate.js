import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { withRouter } from "react-router-dom";

//Text Intro
export const textIntro = (elem) => {
  gsap.from(elem, {
    x: -20,
    opacity: 0,
    duration: 0.8,
    ease: "easeIn"
  });
};

//Menu to light font
export const lightMenuCon = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    color: "#ffffff",
    duration: 0.8,
    ease: "easeIn"
  });
};
//Menu to light font
export const darkMenuCon = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    color: "#502d84",
    duration: 0.8,
    ease: "easeIn"
  });
};

//Open menu
export const menuLeftShow = (elem) => {
  gsap.from([elem], {
    duration: 0.7,
    height: 0,
    transformOrigin: "left bottom",
    skewY: 7,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2
    }
  });
};

export const menuRightShow = (elem) => {
  gsap.from([elem], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right bottom",
    skewY: 7,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2
    }
  });
};
export const menuLinksShow = (elem) => {
  gsap.from([elem], {
    duration: 0.7,
    height: 0,
    transformOrigin: "left bottom",
    skewY: 7,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2
    }
  });
};
export const showInfo = (elem) => {
  gsap.from([elem], {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    ease: "easeInOut"
  });
};
//Close menu
export const menuHide = (elem1, elem2) => {
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07
    }
  });
};
export const navHide = (elem) => {
  gsap.to([elem], {
    duration: 0.3,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07
    }
  });
};
export const menuInfoHide = (elem) => {
  gsap.to([elem], {
    duration: 0.3,
    opacity: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07
    }
  });
};
//Stagger links
export const staggerLinks = (elem1, elem2, elem3) => {
  gsap.from([elem1, elem2, elem3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Hover on the link
export const hoverLink = (e) => {
  gsap.to(e.target, {
    duration: 0.4,
    y: 3,
    skewX: 4,
    ease: "power2.inOut"
  });
};

// Hover away from the link
export const hoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.4,
    y: -3,
    skewX: 0,
    ease: "power2.inOut"
  });
};
//Skew gallery Images
export const skewGallery = (elem1) => {
  //register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(elem1, { transformOrigin: "right center", force3D: true });
  let clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
  ScrollTrigger.create({
    trigger: elem1,
    onUpdate: (self) => {
      const velocity = clamp(Math.round(self.getVelocity() / 300));
      gsap.to(elem1, {
        skew: 0,
        skewY: velocity,
        ease: "power3",
        duration: 0.8,
        overwrite: true
      });
    }
  });
};
