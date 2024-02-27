import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AddDrug from "../Components/AddDrug";
import PharmChart from "../Components/PharmChart";
import DrugList from "../Components/DrugList";
import { useState } from "react";

const Pharm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <div className="section pt-5">
            <div className="">
              <AddDrug />
            </div>
            <div className="">
              <PharmChart />
            </div>
          </div>

          <div className="py-5">
            <DrugList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharm;
