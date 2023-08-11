import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Shipments from "./Components/Shipments";
import FormShipment from "./Components/CreateForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shipment" element={<Shipments />} />
        {/* <Route path="/formshipments" element={<FormShipment />} /> */}
      </Routes>
    </div>
  );
}

export default App;
