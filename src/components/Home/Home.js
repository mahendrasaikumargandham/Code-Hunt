import React from "react";
import "./Home.css";
import homelogo from "../images/homelogo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <img className="home_img" src={homelogo} alt="" />
      <div className="home_bottom" />
      <h1 className="home_heading">Code Hunt</h1>
      <button className="home_button" onClick={() => navigate("/firstcase")}>
        Enter Code Hunt
      </button>
    </div>
  );
}

export default Home;
