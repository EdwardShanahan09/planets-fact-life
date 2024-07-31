import BgImage from "./assets/images/background-stars.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import PlanetPage from "./components/PlanetPage/PlanentPage";

function App() {
  return (
    <div
      id="App"
      style={{
        background: `url(${BgImage}) no-repeat center/cover`,
      }}
    >
      <Navbar />

      <PlanetPage />
    </div>
  );
}

export default App;
