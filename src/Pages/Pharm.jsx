import Navbar from "../Components/Navbar";
import AddDrug from "../Components/Pharm/AddDrug";
import PharmChart from "../Components/Pharm/PharmChart";
import DrugList from "../Components/Pharm/DrugList";
import Sidebar from "../Components/Sidebar";

const Pharm = () => {
  return (
    <>
      <Navbar />

      <div className="media-queries">
        <p>Kindly use a desktop to view this inventory</p>
      </div>


      <div className="wrapper">
        <Sidebar />

        <div className="main container">
          <div className="section pt-5">
            <div className="">
              <AddDrug />
            </div>
            <div>
              <PharmChart />
            </div>
          </div>

          <div className="py-5">
            <DrugList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharm;
