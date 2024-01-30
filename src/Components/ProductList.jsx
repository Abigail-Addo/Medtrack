// import React from 'react'
import { useState, useEffect } from "react";
import "../assets/css/productList.css";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Images from "../assets/images/default-image.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDrugsThunk,
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

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(fetchDrugsThunk());
  }, [dispatch]);

  const deletedrug = async (drug) => {
    const confirmed = confirm("Are you sure you want to delete this drug");
    if (confirmed) {
      dispatch(deleteDrugThunk(drug));
      toast.success("Drug deleted successfully");
    } else {
      toast.error("Failed to delete drug");
    }
  };

  const editDrug = async (drug) => {
    setShowFormModal(true);
  
    dispatch(updateDrugThunk(drug._id));

    setValue("drug_name", drug.drug_name);
    setValue("description", drug.description);
    setValue("drug_code", drug.drug_code);
    setValue("unit_of_pricing", drug.unit_of_pricing);
    setValue("price", drug.price);
  };

  const editSubmit =  (drug) => {
     dispatch(updateDrugThunk(drug._id));

    setShowFormModal(false);
    toast.success("Drug updated successfully");
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
                    onClick={() => setShowModal(true)}
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
                      onClick={() => editDrug(drug._id)}
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
          {/* <figure>
            <img
              src={Images}
              alt="image of the drug"
              style={{ width: 200, height: 200 }}
            />
            <figcaption className="text-center py-2"> name of drug </figcaption>
          </figure> */}

          <div className="details">
            <h4>Drug Name</h4>
            <p>sigjheuirsdfjkgne</p>
          </div>
          <div className="details">
            <h4>Description</h4>
            <p>
              sigjheuirsdfjkgne Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam vel doloremque id accusamus ad amet
              similique voluptatum culpa? Quaerat, provident!
            </p>
          </div>
          <div className="details">
            <h4>Drug Code</h4>
            <p>sigjheuirsdfjkgne</p>
          </div>
          <div className="details">
            <h4>Unit of Pricing</h4>
            <p>sigjheuirsdfjkgne</p>
          </div>
          <div className="details">
            <h4>Price (Ghc)</h4>
            <p>sigjheuirsdfjkgne</p>
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
