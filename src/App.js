import React, { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if user is logged in based on auth token
  const checkLoggedIn = () => {
    const authToken = localStorage.getItem("authToken");
    return authToken !== null;
  };

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
  };

  // Check if user is logged in
  const isAuthenticated = checkLoggedIn();

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
