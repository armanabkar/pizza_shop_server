import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { Low, JSONFile } from "lowdb";
import { v1 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const foodsAdapter = new JSONFile("data/foods.json");
const ordersAdapter = new JSONFile("data/orders.json");
const foodsDB = new Low(foodsAdapter);
const ordersDB = new Low(ordersAdapter);
await foodsDB.read();
await ordersDB.read();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const urlPrefix = "/api/v1";

app.use("/images", express.static(__dirname + "/images"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get(`${urlPrefix}/foods`, async (req, res) => {
  res.send(foodsDB.data);
});

app.get(`${urlPrefix}/orders`, async (req, res) => {
  res.send(ordersDB.data);
});

app.post(`${urlPrefix}/orders/add`, async (req, res) => {
  try {
    const order = {
      id: req.body.id || v1(),
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      items: req.body.items,
    };
    ordersDB.data.push(order);
    await ordersDB.write();
    res.status(200).send("Order created");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete(`${urlPrefix}/orders/delete/:id`, async (req, res) => {
  try {
    const orderIndex = ordersDB.data.indexOf(
      ordersDB.data.find((order) => order.id == req.params.id)
    );

    if (orderIndex !== -1) {
      ordersDB.data.splice(orderIndex, 1);
      await ordersDB.write();
      res.status(200).send("Order deleted");
    } else {
      res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  process.env.NODE_ENV === "development" &&
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

export default app;
