import NavbarOverlay from "../NavbarOverlay/NavbarOverlay";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__logo" href="#">
        THE PLANETS
      </div>

      <NavbarOverlay />

      <div className="Navbar__menu">
        <span className="Navbar__menu--bar"></span>
        <span className="Navbar__menu--bar"></span>
        <span className="Navbar__menu--bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
