import "./App.css";
import Trail from "./components/Trail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hint2 from "./components/Hint2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Trail />} />
          <Route path="/secondhint" element={<Hint2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
