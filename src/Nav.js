import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    // This will prevent having multiple listeners
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    //  If show is true, then append nav__black class
    <div className={`nav ${show && "nav__black"}`}>
      
      
    </div>
  );
}

export default Nav;
