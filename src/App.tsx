import React from "react";
import LoginPage from "./Page/loginPage";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/Customer.Dashboard.Page";

const App = () => {
  return (
    <div>
      <LoginPage />
      <SignUp />
      <Dashboard />
    </div>
  );
};

export default App;
