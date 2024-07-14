import "./App.css";
import Cover from "./components/home-page-components/Cover";

import Schedule from "./components/home-page-components/Schedule";
import Map from "./components/home-page-components/Map";
import Format from "./components/home-page-components/Format";
import Footer from "./components/home-page-components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login-page-components/Login";
import Question from "./components/question-page-components/Question";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-[1140px] mx-auto overflow-visible">
              <Cover />
              <Format />
              <Schedule />
              <Map />
              <Footer />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div className="max-w-[1140px] mx-auto overflow-visible">
              <Login />
            </div>
          }
        />

        <Route
          path="/question/:id"
          element={
            <div className="max-w-[1140px] mx-auto overflow-visible">
              <Question />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
