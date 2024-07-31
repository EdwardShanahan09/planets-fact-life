import "./TabButtons.scss";
import TabButton from "../TabButton/TabButton";
const TabButtonList = ["Overview", "Structure", "Surface"];

const TabButtons = () => {
  return (
    <div className="TabButtons">
      {TabButtonList.map((button, index) => (
        <TabButton key={index} text={button} />
      ))}
    </div>
  );
};

export default TabButtons;
