import "./NavbarItem.scss";

const NavbarItem = ({ planet }) => {
  return <li className="Navbar__item">{planet.name}</li>;
};

export default NavbarItem;
