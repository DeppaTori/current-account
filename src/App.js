import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ApplicationForm } from "./pages/ApplicationForm";

function App() {
  return (
    <div className="App">
      <h1>Current Account</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ApplicationForm />} />
      </Routes>
    </div>
  );
}

export default App;
