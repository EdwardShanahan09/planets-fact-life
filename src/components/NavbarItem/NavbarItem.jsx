import "./NavbarItem.scss";
import IconChevron from "../../assets/icons/icon-chevron.svg";

const NavbarItem = ({ planet }) => {
  return (
    <li className="Navbar__item">
      <span>
        <span className="Navbar__planet"></span>{" "}
        <a className="Navbar__link" href="#">
          {planet.name}
        </a>{" "}
      </span>
      <img src={IconChevron} alt="Chevron Icon" />
    </li>
  );
};

export default NavbarItem;
