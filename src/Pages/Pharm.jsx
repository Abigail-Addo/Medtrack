import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "../assets/css/pharm.css"
import AddProduct from "../Components/AddProduct";
import Statistics from "../Components/Statistics";
import ProductList from "../Components/ProductList";

const Pharm = () => {
  return (
    <>
      <Navbar />
      
      <div className="wrapper">
        <Sidebar />

        <main>
          <div className="main pt-5">
            <AddProduct />
            <Statistics />
          </div>
          <div className="py-5">
            <ProductList />
          </div>
        </main>
      </div>
    </>
  );
};

export default Pharm;
