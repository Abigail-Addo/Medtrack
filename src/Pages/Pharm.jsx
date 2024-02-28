import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AddDrug from "../Components/AddDrug";
import PharmChart from "../Components/PharmChart";
import DrugList from "../Components/DrugList";

// eslint-disable-next-line react/prop-types
const Pharm = () => {

  
  return (
    <>
      <Navbar />

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
            {/* Pass searchQuery as a prop to DrugList component */}
            <DrugList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharm;
