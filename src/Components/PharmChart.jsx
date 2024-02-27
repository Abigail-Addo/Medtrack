import { Chart } from "react-google-charts";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUnitThunk} from "../store/features/pharmacy/pharmacySlice";

const PharmChart = () => {
  const dispatch = useDispatch();
  const unitOfPricing = useSelector((state) => state.pharmacy.unitOfPricing);

  useEffect(() => {
    dispatch(fetchUnitThunk());
  }, [dispatch]);

  const data = Object.entries(unitOfPricing).map(([label, value]) => [
    label,
    value,
  ]);

  const options = {
    // title: "My Daily Activities",
    is3D: true,
  };

  // Add the header for the columns
  const dataWithHeader = [["Unit of Pricing", "Count"], ...data];

  return (
    <>
      <div className="container">
        <div className="stats">
          <Chart
            chartType="PieChart"
            data={dataWithHeader}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </>
  );
};

export default PharmChart;
