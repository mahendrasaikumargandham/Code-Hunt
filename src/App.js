import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trail1 from "./components/Hint1/Trail1";
import Trail2 from "./components/Hint2/Trail2";
import Trail3 from "./components/Hint3/Trail3";
import Trail4 from "./components/Hint4/Trail4";
import Trail5 from "./components/Hint5/Trail5";
import Trail6 from "./components/Hint6/Trail6";
import Home from "./components/Home/Home";
import DNA1 from "./components/Hint1/DNA1";
import DNA2 from "./components/Hint2/DNA2";
import DNA3 from "./components/Hint3/DNA3";
import DNA4 from "./components/Hint4/DNA4";
import DNA5 from "./components/Hint5/DNA5";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstcase" element={<Trail1 />} />
          <Route path="/secondcase" element={<Trail2 />} />
          <Route path="/thirdcase" element={<Trail3 />} />
          <Route path="/forthcase" element={<Trail4 />} />
          <Route path="/climax" element={<Trail5 />} />
          <Route path="/firstcase/find" element={<DNA1 />} />
          <Route path="/secondcase/find" element={<DNA2 />} />
          <Route path="/thirdcase/find" element={<DNA3 />} />
          <Route path="/forthcase/find" element={<DNA4 />} />
          <Route path="/climax/find" element={<DNA5 />} />
          {/* <Route path="/climax" element={<Trail6 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
