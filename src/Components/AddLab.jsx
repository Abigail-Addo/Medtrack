// import React from 'react'
import { useForm } from "react-hook-form";

import { addlabThunk } from "../store/features/pharmacy/labSlice";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddLab = () => {
  const { register, handleSubmit, getValues, reset } = useForm();

  const dispatch = useDispatch();

  const addSubmit = () => {
    try {
      const lab = getValues();
      dispatch(addlabThunk(lab));
      const confirmed = confirm("Are you sure you want to add this lab item");
      if (confirmed) {
        setTimeout(() => {
          toast.success("Lab item added successfully");
        }, 0.003);
        reset();
      } else {
        reset();
      }
    } catch (error) {
      console.error("Error adding lab item:", error);
      toast.error("Failed to add lab item. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="container">
        <form onSubmit={handleSubmit(addSubmit)} encType="multipart/form-data">
          <div className="formControl">
            <label htmlFor="labItem">Lab Item</label>
            <input
              type="text"
              name="labItem"
              id="labItem"
              {...register("lab_item", { required: true })}
            />
          </div>
          <div className="formControl">
            <label htmlFor="labType">Lab Type</label>
            <select
              name="labType"
              id="labType"
              {...register("lab_type", { required: true })}
            >
              <option value="Select">Select lab type</option>
              <option value="Radiology">Radiology</option>
              <option value="Laboratory">Laboratory</option>
            </select>
          </div>
          <div className="formControl">
            <label htmlFor="category">Main Category</label>
            <input
              type="text"
              name="category"
              id="category"
              {...register("category", { required: true })}
            />
          </div>
          <div className="formControl">
            <label htmlFor="subCategory">Sub Category</label>
            <input
              type="text"
              name="subCategory"
              id="subCategory"
              {...register("sub_category", { required: true })}
            />
          </div>
          <div className="formControl">
            <label htmlFor="code">Code</label>
            <input
              type="text"
              name="code"
              id="code"
              {...register("code", { required: true })}
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

export default AddLab;
