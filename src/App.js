import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ApplicationForm } from "./pages/ApplicationForm";
import { Confirmation } from "./pages/Confirmation";
import { PendingTask } from "./pages/PendingTask";
import { UploadDocument } from "./pages/UploadDocument";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ApplicationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/pending-task" element={<PendingTask />} />
        <Route path="/upload-document" element={<UploadDocument />} />
      </Routes>
    </div>
  );
}

export default App;
