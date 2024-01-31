import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "../assets/css/lab.css";

const Lab = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <Sidebar />

        <main>
          <div className="main pt-5">
           <h1>Lab page</h1>
          </div>
          <div className="py-5">
           
          </div>
        </main>
      </div>
    </>
  );
};

export default Lab;
