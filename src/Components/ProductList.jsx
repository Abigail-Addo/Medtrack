// import React from 'react'
import { useState, useEffect } from "react";

// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchDrugsThunk,
  fetchDrugThunk,
  deleteDrugThunk,
  updateDrugThunk,
} from "../store/features/pharmacy/pharmacySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const ProductList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const dispatch = useDispatch();
  const drugs = useSelector((state) => state.pharmacy.drugs);
  const drug = useSelector((state) => state.pharmacy.drug);

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(fetchDrugsThunk());
  }, [dispatch]);

  const deletedrug = async (drug) => {
    const confirmed = confirm("Are you sure you want to delete this drug");
    if (confirmed) {
      try {
        dispatch(deleteDrugThunk(drug));
        toast.success("Drug deleted successfully");
      } catch (error) {
        toast.error("Failed to delete drug");
      }
    }
  };

  const editDrug = async (drug) => {
    try {
      setShowFormModal(true);

      dispatch(fetchDrugThunk(drug._id));

      setValue("_id", drug._id);
      setValue("drug_name", drug.drug_name);
      setValue("description", drug.description);
      setValue("drug_code", drug.drug_code);
      setValue("unit_of_pricing", drug.unit_of_pricing);
      setValue("price", drug.price);
    } catch (error) {
      console.error(error);
    }
  };

  const editSubmit = (drug) => {
    try {
      const confirmed = confirm("Are you sure you want to edit this drug");
      if (confirmed) {
        dispatch(updateDrugThunk(drug));

        setShowFormModal(false);
        toast.success("Drug updated successfully");
      }
      setShowFormModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const showProductDetails = (drugId) => {
    try {
      console.log(drugId);
      dispatch(fetchDrugThunk(drugId._id));
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
                <th>Drug Name</th>
                <th>Description</th>
                <th>Drug Code</th>
                <th>Unit of Pricing</th>
                <th>Price (GH&cent;)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug) => (
                <tr key={drug._id}>
                  <td
                    onClick={() => showProductDetails(drug)}
                    className="product-modal"
                  >
                    {drug.drug_name}
                  </td>
                  <td title="Click on the drug name to view full details.">
                    {drug.description}
                  </td>
                  <td title="Click on the drug name to view full details.">
                    {drug.drug_code}
                  </td>
                  <td title="Click on the drug name to view full details.">
                    {drug.unit_of_pricing}
                  </td>
                  <td title="Click on the drug name to view full details.">
                    {drug.price}
                  </td>
                  <td>
                    <span
                      className="material-symbols-outlined"
                      title="edit"
                      onClick={() => editDrug(drug)}
                    >
                      edit
                    </span>
                    <span
                      onClick={() => deletedrug(drug._id)}
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
            <h4>Drug Name</h4>
            <p>{drug.drug_name}</p>
          </div>

          <div className="details">
            <h4>Description</h4>
            <p>{drug.description}</p>
          </div>
          <div className="details">
            <h4>Drug Code</h4>
            <p>{drug.drug_code}</p>
          </div>
          <div className="details">
            <h4>Unit of Pricing</h4>
            <p>{drug.unit_of_pricing}</p>
          </div>
          <div className="details">
            <h4>Price (Ghc)</h4>
            <p>{drug.price}</p>
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
            <h1>Edit Drug</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(editSubmit)}
            encType="multipart/form-data"
          >
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

            <button type="submit">Edit</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductList;
