import Navbar from "../Components/Navbar";
import "../assets/css/App.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="right">
        <div className="container text">
          <h1>Health Records For All</h1>
          <p>
            MedTrack provides secure digital medical data for healthcare
            providers and patients nationwide, ensuring accessibility and
            protection of health records using the Ghana Card ID system.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
