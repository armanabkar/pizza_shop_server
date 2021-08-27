import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { getAllFoods } from "./Controllers/food.js";
import { addNewOrder, deleteOrder, getAllOrders } from "./Controllers/order.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const urlPrefix = "/api/v1";

app.use("/images", express.static(__dirname + "/images"));

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));

app.get(`${urlPrefix}/foods`, getAllFoods);

app.get(`${urlPrefix}/orders`, getAllOrders);
app.post(`${urlPrefix}/orders/add`, addNewOrder);
app.delete(`${urlPrefix}/orders/delete/:id`, deleteOrder);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  process.env.NODE_ENV === "development" &&
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

export default app;
