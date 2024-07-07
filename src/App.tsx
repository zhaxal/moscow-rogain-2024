import "./App.css";
import Cover from "./components/Cover";
import Description from "./components/Description";
import Schedule from "./components/Schedule";
import Map from "./components/Map";

function App() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Cover />
      <Description />
      <Schedule />
      <Map />
    </div>
  );
}

export default App;
