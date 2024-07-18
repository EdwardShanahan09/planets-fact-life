import NavbarOverlay from "../NavbarOverlay/NavbarOverlay";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <nav className="Navbar">
      <div className="Navbar__logo">THE PLANETS</div>

      <NavbarOverlay isActive={isActive} />

      <div
        onClick={handleToggleMenu}
        className={`Navbar__menu ${isActive ? "active" : ""}`}
      >
        <span className="Navbar__menu--bar"></span>
        <span className="Navbar__menu--bar"></span>
        <span className="Navbar__menu--bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
