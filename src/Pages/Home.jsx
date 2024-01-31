// import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="d-flex justify-content-evenly">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/pharmacy">Pharmacy</Link>
        <br />
        <Link to="/laboratory">Laboratory</Link>
      </nav>

      <h1>Home page</h1>
    </>
  );
};

export default Home;
