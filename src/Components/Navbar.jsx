import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Lifted state up to the parent component
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
                value={searchQuery}
                onChange={handleSearchInputChange}
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
