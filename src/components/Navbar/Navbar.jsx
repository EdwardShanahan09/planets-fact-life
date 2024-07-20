import NavbarItem from "../NavbarItem/NavbarItem";
import NavbarOverlay from "../NavbarOverlay/NavbarOverlay";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const planetList = [
    {
      name: "mercury",
      color: "#DEF4FC",
    },
    {
      name: "venus",
      color: "#F7CC7F",
    },
    {
      name: "earth",
      color: "#545BFE",
    },
    {
      name: "mars",
      color: "#FF6A45",
    },
    {
      name: "jupiter",
      color: "#ECAD7A",
    },
    {
      name: "saturn",
      color: "#FCCB6B",
    },
    {
      name: "uranus",
      color: "#65F0D5",
    },
    {
      name: "neptune",
      color: "#497EFA",
    },
  ];

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

      <ul className="Navbar__list">
        {planetList.map((planet, index) => {
          return <NavbarItem planet={planet} key={index} />;
        })}
      </ul>

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
