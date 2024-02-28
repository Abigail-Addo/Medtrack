import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Logo from "../assets/images/logo.png";


// eslint-disable-next-line react/prop-types
const Navbar = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleExpand = () => {
    setIsExpanded(!isExpanded);

    // Trigger the search when the search icon is clicked
    onSearch(searchQuery);
  };

  return (
    <div className="nav-bar">
      <header>
       <img src={Logo} alt="Logo" className="px-2"/>
       <h2>Medtrack</h2>
      </header>
      <nav className="d-flex justify-content-between align-items-center px-4">
        <div>
          <span className="text-dark bg-#D9D9D9 border border-dark button">
            <BiSearch onClick={handleExpand} role="button" />
            {isExpanded && (
              <input
                className="search-input search-expanded"
                type="search"
                placeholder="Search keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update the state when the input changes
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

