import "./App.css";
import Cover from "./components/Cover";
import Description from "./components/Description";
import Schedule from "./components/Schedule";
import Map from "./components/Map";
import Format from "./components/Format";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1140px] mx-auto overflow-visible">
      <Cover />
      <Description />
      <Format />
      <Schedule />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
