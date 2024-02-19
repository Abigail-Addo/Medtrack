import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AddLab from "../Components/AddLab";
import Statistics from "../Components/Statistics";
import LabList from "../Components/LabList";

const Lab = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <div className="section pt-5 form">
            <div className="">
              <AddLab />
            </div>
            <div className="">
              <Statistics />
            </div>
          </div>

          <div className="py-5">
            <LabList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lab;
