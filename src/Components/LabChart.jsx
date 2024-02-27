import { Chart } from "react-google-charts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLabTypeThunk } from "../store/features/pharmacy/labSlice";

const LabChart = () => {
  const dispatch = useDispatch();
  const labType = useSelector((state) => state.laboratory.labType);

  useEffect(() => {
    dispatch(fetchLabTypeThunk());
  }, [dispatch]);

  const data = Object.entries(labType).map(([label, value]) => [
    label,
    value,
  ]);

  const options = {
    // title: "My Daily Activities",
    is3D: true,
  };

  // Add the header for the columns
  const dataWithHeader = [["LabType", "Count"], ...data];

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

export default LabChart;
