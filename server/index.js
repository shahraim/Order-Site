require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { generateRandomNumericValue } = require("./getRandomwNumber");

const app = express();
const port = process.env.PORT; // Access port from environment variable

app.use(cors());
app.use(express.json());

// Define the user schema
const userSchema = new mongoose.Schema({
  referenceNo: {
    required: true,
    type: Number,
  },
  location: {
    required: true,
    type: String,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    required: true,
    type: String,
  },
  selectValue: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
  amount: {
    required: true,
    type: Number,
  },
  remarks: {
    required: true,
    type: Number,
  },
});

const Order = mongoose.model("ShpmentUser", userSchema);

// Connect to the MongoDB database
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", (error) => {
  console.log("Database connection error:", error);
});
database.once("open", () => {
  console.log("Database Connected");
});

app.get("/", async (req, res) => {
  return res.status(200).json({ message: "Hello WOrld", status: 200 });
});
app.get("/shipmentorder", async (req, res) => {
  try {
    const data = await Order.find();
    return res
      .status(200)
      .json({ message: "order fetch successfully", status: 200, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, status: 500 });
  }
});

app.post("/sipmentorder", async (req, res) => {
  const formData = req.body;
  console.log(formData);

  try {
    // Save the form data to the MongoDB database
    const newOrder = new Order({
      ...formData,
      referenceNo: generateRandomNumericValue(),
    });
    await newOrder.save();

    return res.status(201).json({ message: "Order submitted successfully" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(500).json({ message: "Email Already Exists" });
    }
    return res.status(500).json({ message: error.message });
  }
});

app.delete("/shipmentorder/:id", async (req, res) => {
  const shipmentId = req.params.id;

  try {
    // Find and remove the shipment order by ID
    const deletedOrder = await Order.findByIdAndRemove(shipmentId);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Shipment order not found" });
    }

    return res
      .status(200)
      .json({ message: "Shipment order deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error deleting shipment order", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
