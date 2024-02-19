// import React from 'react'
import { useState, useEffect } from "react";

// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchLabsThunk,
  fetchLabThunk,
  deleteLabThunk,
  updateLabThunk,
} from "../store/features/pharmacy/labSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";

const LabList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const dispatch = useDispatch();
  const labs = useSelector((state) => state.laboratory.labs);
  const lab = useSelector((state) => state.laboratory.lab);

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(fetchLabsThunk());
  }, [dispatch]);

  const deleteLab = async (lab) => {
    const confirmed = confirm("Are you sure you want to delete this lab item");
    if (confirmed) {
      try {
        dispatch(deleteLabThunk(lab));
        toast.success("Lab item deleted successfully");
      } catch (error) {
        toast.error("Failed to delete lab item");
      }
    }
  };

  const editLab = async (lab) => {
    try {
      setShowFormModal(true);

      dispatch(fetchLabThunk(lab._id));
      setValue("_id", lab._id);
      setValue("lab_item", lab.lab_item);
      setValue("lab_type", lab.lab_type);
      setValue("category", lab.category);
      setValue("sub_category", lab.sub_category);
      setValue("code", lab.code);
      setValue("price", lab.price);
    } catch (error) {
      console.error(error);
    }
  };

  const editSubmit = (lab) => {
    try {
      const confirmed = confirm("Are you sure you want to update this lab item");
      if (confirmed) {
        dispatch(updateLabThunk(lab));

        setShowFormModal(false);
        toast.success("Lab item updated successfully");
      }
      setShowFormModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const showProductDetails = (labId) => {
    try {
      console.log(labId);
      dispatch(fetchLabThunk(labId._id));
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />

      {/* Product list */}
      <div className="container">
        <div className="table-container bg-white">
          <table>
            <thead>
              <tr className="text-muted">
                <th>Lab Item</th>
                <th>Lab Type</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Code</th>
                <th>Price (GH&cent;)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {labs.map((lab) => (
                <tr key={lab._id}>
                  <td
                    onClick={() => showProductDetails(lab)}
                    className="product-modal"
                  >
                    {lab.lab_item}
                  </td>
                  <td title="Click on the lab item to view full details.">
                    {lab.lab_type}
                  </td>
                  <td title="Click on the lab item to view full details.">
                    {lab.category}
                  </td>
                  <td title="Click on the lab item to view full details.">
                    {lab.sub_category}
                  </td>
                  <td title="Click on the lab item to view full details.">
                    {lab.code}
                  </td>
                  <td title="Click on the lab item to view full details.">
                    {lab.price}
                  </td>
                  <td>
                    <span
                      className="material-symbols-outlined"
                      title="update"
                      onClick={() => editLab(lab)}
                    >
                      edit
                    </span>
                    <span
                      onClick={() => deleteLab(lab._id)}
                      className="material-symbols-outlined px-3 text-danger"
                      title="delete"
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product details */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal">
            <h1>Product Details</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="details">
            <h4>Lab Item</h4>
            <p>{lab.lab_item}</p>
          </div>

          <div className="details">
            <h4>Lab Type</h4>
            <p>{lab.lab_type}</p>
          </div>
          <div className="details">
            <h4>Category</h4>
            <p>{lab.category}</p>
          </div>
          <div className="details">
            <h4>Sub Category</h4>
            <p>{lab.sub_category}</p>
          </div>
          <div className="details">
            <h4>Code</h4>
            <p>{lab.code}</p>
          </div>
          <div className="details">
            <h4>Price (Ghc)</h4>
            <p>{lab.price}</p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Form to edit product */}
      <Modal
        show={showFormModal}
        onHide={() => setShowFormModal(false)}
        aria-labelledby="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal">
            <h1>Edit Lab Item</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(editSubmit)}
            encType="multipart/form-data"
          >
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

            <button type="submit">Update</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LabList;
