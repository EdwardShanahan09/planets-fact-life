import "./TabButton.scss";

const TabButton = ({ text }) => {
  console.log(text);
  return (
    <button style={{ borderBottom: "2px solid #419EBB" }} className="TabButton">
      {text}
    </button>
  );
};

export default TabButton;
