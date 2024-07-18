import "./NavbarOverlay.scss";

const NavbarOverlay = ({ isActive }) => {
  return <div className={`NavbarOverlay ${isActive ? "active" : ""}`}></div>;
};

export default NavbarOverlay;
