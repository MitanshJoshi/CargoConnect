import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginOwner from "./LoginPage/LoginOwner";
import Registrationpage from "./RegistrationPage/Registrationpage";
import AddFactory from "./RegistrationPage/AddFactory";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginOwner />} />
        <Route path="/registrationpage" element={<Registrationpage />} />
        <Route path="/addfactory" element={<AddFactory />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
