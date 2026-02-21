const express = require("express");
const cors = require("cors");
const fs = require("fs");

const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Create orders.json if not exists
if (!fs.existsSync("orders.json")) {
  fs.writeFileSync("orders.json", JSON.stringify([]));
}

app.post("/order", (req, res) => {
  const newOrder = req.body;

  const orders = JSON.parse(fs.readFileSync("orders.json"));
  orders.push({
    ...newOrder,
    time: new Date().toLocaleString()
  });

  fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2));

  res.json({ message: "Order received successfully" });
});

app.get("/orders", (req, res) => {
  const orders = JSON.parse(fs.readFileSync("orders.json"));
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});