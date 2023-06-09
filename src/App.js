import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./usrmain/Dashboard";
import { Card } from "@mui/material";

function App() {
  return (
    <Routes>
      <Route path="/education-app" element={<Login />} />
      <Route path="/education-app/SignUp" element={<SignUp />} />
      <Route path="/education-app/Dashboard" element={<Dashboard />} />
      <Route path="/education-app/Card" element={<Card />} />
      {/* <Route path="*" element={<h1>404: Not Found</h1>} /> */}
    </Routes>
  );
}

export default App;
