// import React from 'react'
import { useForm } from "react-hook-form";

import { addDrugThunk } from "../store/features/pharmacy/pharmacySlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const { register, handleSubmit, getValues, reset } = useForm();

  const dispatch = useDispatch();

  const addSubmit = () => {
    const drug = getValues();
    dispatch(addDrugThunk(drug));
    reset();
    toast.success("Drug added successfully");
  };

  return (
    <div className="container">
      
      <ToastContainer />

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
            type="text"
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
  );
};

export default AddProduct;
