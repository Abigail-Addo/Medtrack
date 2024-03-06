// import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../assets/css/App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <nav className="home d-flex justify-content-evenly align-items-center">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/pharmacy">Pharmacy</Link>
        <br />
        <Link to="/laboratory">Laboratory</Link>
      </nav>

      <div
        className="p-5 text-center bg-image rounded-3"

      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <a className="btn btn-outline-light btn-lg" href="#!" role="button">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
