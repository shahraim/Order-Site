import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const CreateForm = ({ openCreate, setOpenCreate, setCallGetOrderApi }) => {
  const { setFormData } = useContext(UserContext);
  const [formInfo, setFormInfo] = useState({
    // referenceNo: "",
    location: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    selectValue: "",
    amount: "",
    date: "",
    remarks: "",
    // checkboxValue: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:6246/sipmentorder";

    // Set the form data in the context
    setFormData((pre) => [...pre, formInfo]);
    // console.log("Form submitted:", formInfo);

    axios
      .post(url, formInfo)
      .then((res) => {
        toast.success(res.data.message);
        setCallGetOrderApi((pre) => !pre);
        setOpenCreate(false);
        setFormInfo({
          // referenceNo: "",
          location: "",
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          selectValue: "",
          amount: "",
          date: "",
          remarks: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  const handleChangeInput = (e) => {
    setFormInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className="form-container">
      {/* <button className="new-shipments-link" onClick={() => setOpenCreate(true)}>
        New Order
      </button> */}
      <Modal show={openCreate} onHide={() => setOpenCreate(false)}>
        <form onSubmit={handleFormSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>Order Information</Modal.Title>
          </Modal.Header>
          <Modal.Body className='module'>
            <div className="input-row">
              <input
                required
                type="text"
                name="firstName"
                placeholder="FirstName"
                onChange={handleChangeInput}
                value={formInfo.firstName}
                style={inputStyle}
              />
              <input
                required
                type="text"
                name="lastName"
                placeholder="LastName"
                onChange={handleChangeInput}
                value={formInfo.lastName}
                style={inputStyle}
              />
            </div>
            <div className="input-row">
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChangeInput}
                value={formInfo.email}
                style={inputStyle}
              />
              <input
                required
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChangeInput}
                value={formInfo.phone}
                style={inputStyle}
              />
              <input
                required
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleChangeInput}
                value={formInfo.location}
                style={inputStyle}
              />
            </div>
            <div className="input-row">
              <input
                required
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChangeInput}
                value={formInfo.address}
                style={inputStyle}
              />

              <select
                name="selectValue"
                style={inputStyle}
                onChange={handleChangeInput}
                value={formInfo.selectValue}
              >
                <option value="">Select an option</option>
                <option value="watch">Watch</option>
                <option value="shoes">Shoes</option>
                <option value="clothes">Clothes</option>
                <option value="perfume ">Perfume</option>
              </select>
              <input
                required
                type="number"
                name="amount"
                placeholder="Amount"
                onChange={handleChangeInput}
                value={formInfo.amount}
                style={inputStyle}
              />
            </div>
            <div className="input-row">
              <input
                required
                type="date"
                name="date"
                placeholder="Date"
                onChange={handleChangeInput}
                value={formInfo.date}
                style={inputStyle}
              />
              <input
                required
                type="number"
                name="remarks"
                placeholder="Remarks 1/10"
                min="1"
                max="10"
                onChange={handleChangeInput}
                value={formInfo.remarks}
                style={inputStyle}
              />
              {/* <label>
                <input
                  required
                  type="checkbox"
                  name="checkboxValue"
                  style={checkboxStyle}
                  onChange={handleChangeInput}
                  checked={formInfo.checkboxValue}
                />
                Checkbox
              </label> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpenCreate(false)}>
              Close
            </Button>
            <Button variant="primary" type="sybmit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

const inputStyle = {
  width: "200px",
  marginBottom: "10px",
  marginTop: "10px",
  margin: "0 5px",
  padding: "10px",
  border: "none",
  borderBottom: "1px solid black",
  outline: "none",
};


export default CreateForm;
