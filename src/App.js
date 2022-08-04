import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ApplicationForm } from "./pages/ApplicationForm";
import { Confirmation } from "./pages/Confirmation";
import { PendingTask } from "./pages/PendingTask";

function App() {
  return (
    <div className="App">
      <h1>Current Account</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ApplicationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/pending-task" element={<PendingTask />} />
      </Routes>
    </div>
  );
}

export default App;
