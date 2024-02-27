import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
// import {searchDrugsThunk} from "../store/features/pharmacy/pharmacySlice";
// import { useDispatch } from "react-redux";

const Navbar = () => {
  // const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="nav-bar">
      <header></header>
      <nav className="d-flex justify-content-between align-items-center px-4">
        <div>

          <span className="text-dark bg-white border border-dark button">
            <BiSearch onClick={handleExpand} role="button" />
            {isExpanded && (
              <input
                className="search-input search-expanded"
                type="search"
                placeholder="Search keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
          </span>
        </div>

        <Link to="/home">Back to Home</Link>
      </nav>
    </div>
  );
};

export default Navbar;
