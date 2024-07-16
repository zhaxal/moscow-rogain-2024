import "./App.css";
import Cover from "./components/home-page-components/Cover";

import Schedule from "./components/home-page-components/Schedule";
import Map from "./components/home-page-components/Map";
import Format from "./components/home-page-components/Format";
import Footer from "./components/home-page-components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login-page-components/Login";
import Question from "./components/question-page-components/Question";
import AuthProvider from "./contexts/AuthContext";
import SecuredRoute from "./components/SecuredRoute";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
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
                <SecuredRoute allowedRoles={["user", "admin"]}>
                  <div className="max-w-[1140px] mx-auto overflow-visible">
                    <Question />
                  </div>
                </SecuredRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
