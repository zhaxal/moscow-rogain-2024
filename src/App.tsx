import "./App.css";
import Cover from "./components/Cover";
import Description from "./components/Description";
import Schedule from "./components/Schedule";
import Map from "./components/Map";
import Format from "./components/Format";

function App() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Cover />
      <Description />
      <Format />
      <Schedule />
      <Map />
    </div>
  );
}

export default App;
