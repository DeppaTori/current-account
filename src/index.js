import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ApplicationForm } from "./pages/ApplicationForm";
import { Confirmation } from "./pages/Confirmation";
import { PendingTask } from "./pages/PendingTask";
import { UploadDocument } from "./pages/UploadDocument";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/form" element={<ApplicationForm />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/pending-task" element={<PendingTask />} />
            <Route path="/upload-document" element={<UploadDocument />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
