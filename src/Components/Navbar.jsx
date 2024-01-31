import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <header></header>
      <nav className="d-flex justify-content-between align-items-center px-4">
        <span>Navbar</span>

        <Link to="/home">Back to Home</Link>
      </nav>
    </div>
  );
};

export default Navbar;
