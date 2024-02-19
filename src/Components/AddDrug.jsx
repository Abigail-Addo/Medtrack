import { useForm } from "react-hook-form";

import { addDrugThunk } from "../store/features/pharmacy/pharmacySlice";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import unitOfPricingDb from "../assets/db/unitOfPricing.json";

const AddDrug = () => {
  const { register, handleSubmit, getValues, reset } = useForm();

  const dispatch = useDispatch();

  const addSubmit = () => {
    try {
      const drug = getValues();
      dispatch(addDrugThunk(drug));
      const confirmed = confirm("Are you sure you want to add this drug");
      if (confirmed) {
        setTimeout(() => {
          toast.success("Drug added successfully");
        }, 0.003);
        reset();
      } else {
        reset();
      }
    } catch (error) {
      console.error("Error adding drug:", error);
      toast.error("Failed to add drug. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="container">
        <form onSubmit={handleSubmit(addSubmit)} encType="multipart/form-data">
          <div className="formControl">
            <label htmlFor="drugName">Drug Name</label>
            <input
              type="text"
              name="drugName"
              id="drugName"
              {...register("drug_name", { required: true })}
            />
          </div>
          <div className="formControl">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              name="desc"
              id="desc"
              {...register("description", { required: true })}
            />
          </div>
          <div className="formControl">
            <label htmlFor="drugCode">Drug Code</label>
            <input
              type="text"
              name="drugCode"
              id="drugCode"
              {...register("drug_code", { required: true })}
            />
          </div>
          <div className="formControl">
            <label htmlFor="unitOfPricing">Unit of Pricing</label>
            <input
              list="unitOfPricing"
              name="unitOfPricing"
              id="unitOfPricing"
              {...register("unit_of_pricing", { required: true })}
            />
          </div>

          <div className="formControl">
            <label htmlFor="price">Price (GH&cent;)</label>
            <input
              type="number"
              name="price"
              id="price"
              {...register("price", { required: true })}
            />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddDrug;
