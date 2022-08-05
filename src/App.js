import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ApplicationForm } from "./pages/ApplicationForm";
import { Confirmation } from "./pages/Confirmation";
import { PendingTask } from "./pages/PendingTask";
import { UploadDocument } from "./pages/UploadDocument";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <h1>Current Account</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/form">
          <Button variant="contained">Aplikasi Pembukaan Rekening Giro</Button>
        </Link>{" "}
        |{" "}
        <Link to="/pending-task">
          <Button variant="outlined">Pending Task</Button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
