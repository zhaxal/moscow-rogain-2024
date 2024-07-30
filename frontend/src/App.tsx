import "./App.css";

import Map from "./components/home-page-components/new/Map";
import Cover from "./components/home-page-components/new/Cover";
import Format from "./components/home-page-components/new/Format";
import Footer from "./components/home-page-components/new/Footer";

import Login from "./components/login-page-components/Login";
import Question from "./components/question-page-components/Question";

import SecuredRoute from "./components/SecuredRoute";

import { SnackbarProvider } from "./contexts/SnackbarContext";
import AuthProvider from "./contexts/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin-page-components/Admin";
import OldPage from "./components/OldPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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

              <Route
                path="/admin"
                element={
                  <SecuredRoute allowedRoles={["admin"]}>
                    <div className="max-w-[1280px] mx-auto">
                      <Admin />
                    </div>
                  </SecuredRoute>
                }
              />

              <Route
                path="/old"
                element={
                  <div className="max-w-[1140px] mx-auto overflow-visible">
                    <OldPage />
                  </div>
                }
              />

              <Route
                path="*"
                element={
                  <div className="max-w-[1140px] mx-auto overflow-visible">
                    <h1>404</h1>
                  </div>
                }
              />
            </Routes>
          </Router>
        </AuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default App;
