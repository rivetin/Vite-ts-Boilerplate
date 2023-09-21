import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import AppContextLayout from "./context/contextLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppContextLayout />}>
            <Route path="/" element={<h1>root</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
