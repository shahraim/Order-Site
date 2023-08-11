import React, { useContext, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { UserContext } from "../Context/UserContext";
import CreateForm from "./CreateForm";
import { toast } from "react-toastify";

function Shipments() {
  const { formData } = useContext(UserContext);
  const [shipmentData, setShipmentData] = React.useState([]);
  const [openCreate, setOpenCreate] = React.useState(false);
  const [callGetOrderApi, setCallGetOrderApi] = React.useState(false);
  const [showDeleteButton, setShowDeleteButton] = React.useState(false);

  const openFormFunc = () => {
    setOpenCreate(true);
  };

  const handleDelete = (shipmentId) => {
    axios
      .delete(`http://localhost:6246/shipmentorder/${shipmentId}`)
      .then((response) => {
        toast.success("Shipment order deleted successfully");
        setCallGetOrderApi(!callGetOrderApi); // Trigger a re-fetch of data after deletion
      })
      .catch((error) => {
        toast.error("Error deleting shipment order");
      });
  };

  useEffect(() => {
    const url = "http://localhost:6246/shipmentorder";
    axios
      .get(url)
      .then((response) => {
        setShipmentData(response.data.data);
        setShowDeleteButton(response.data.data.length > 0);
        console.log(response.data.data);
      })
      .catch((error) => {
        toast.error("Error fetching data:", error);
      });
  }, [callGetOrderApi]);

  return (
    <div className="shipments">
      <div className="container">
        <ul className="nested-list">
          <li>Shipments</li>
          <li>Loadsheets</li>
          <li>Invoices</li>
        </ul>
      </div>
      <div className="button-container">
        <Button
          variant="dark"
          className="new-shipments-link"
          onClick={openFormFunc}
        >
          Create
        </Button>
      </div>
      <div style={{ clear: "both" }}></div>
      <div style={{ margin: "5px 10px" }}>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Order No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Address</th>
              <th>Value</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Remarks</th>
              {showDeleteButton && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {shipmentData.length > 0 &&
              shipmentData.map((obj, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{obj.referenceNo}</td>
                  <td>
                    {obj.firstName} {obj.lastName}
                  </td>
                  <td>{obj.email}</td>
                  <td>{obj.phone}</td>
                  <td>{obj.location}</td>
                  <td>{obj.address}</td>
                  <td>{obj.selectValue}</td>
                  <td>{obj.amount}</td>
                  <td>{obj.date}</td>
                  <td>{obj.remarks}</td>
                  {showDeleteButton && (
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(obj._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <CreateForm
        setCallGetOrderApi={setCallGetOrderApi}
        openCreate={openCreate}
        setOpenCreate={setOpenCreate}
      />
    </div>
  );
}

export default Shipments;
