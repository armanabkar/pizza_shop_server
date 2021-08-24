import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { Low, JSONFile } from "lowdb";

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

app.get(`${urlPrefix}/foods`, (req, res) => {
  res.send(foodsDB.data);
});

app.get(`${urlPrefix}/orders`, (req, res) => {
  res.send(ordersDB.data);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  process.env.NODE_ENV === "development" &&
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
