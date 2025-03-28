import { useEffect, useRef, useState } from "react";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/about", label: "Über Reck" },
  { path: "/leistungen/sanitaer", label: "Sanitär" },
  { path: "/leistungen/heizung", label: "Heizung" },
  { path: "/leistungen/bower-door-messung", label: "Bower Door Messung" },
  { path: "/leistungen/flaschner", label: "Flaschner" },
  { path: "/leistungen/gebaeudetechnik", label: "Gebäudetechnik" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <a href="/">
            <img
              src="/images/reck_logo.png"
              alt="logo-scheffold"
              decoding="async"
              width={150}
            />
          </a>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <a href="/">
              <img
                src="/images/reck_logo.png"
                alt="logo-scheffold"
                decoding="async"
                width={150}
              />
            </a>
          </div>
          <div className="menu-close">
            <p onClick={toggleMenu}>Close</p>
          </div>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a className="menu-link" href={link.path}>
                    {link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info-col">
            <p>kley@hans-peter-reck.de</p>
            <p>T 07371 5100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
