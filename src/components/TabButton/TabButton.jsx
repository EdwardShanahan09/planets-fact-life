import "./TabButton.scss";

const TabButton = ({ text }) => {
  return (
    <button style={{ borderBottom: "1px solid #419EBB" }} className="TabButton">
      {text}
    </button>
  );
};

export default TabButton;
