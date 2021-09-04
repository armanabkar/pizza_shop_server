import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { getAllFoods } from "./Controllers/food.js";
import { addNewOrder, deleteOrder, getAllOrders } from "./Controllers/order.js";
import { authUser, deleteUser, registerUser } from "./Controllers/user.js";
import {
  addNewReservation,
  deleteReservation,
  getAllReservations,
} from "./Controllers/reservations.js";

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

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));

app.use("/images", express.static(__dirname + "/images"));

app.get(`${urlPrefix}/foods`, getAllFoods);

app.get(`${urlPrefix}/orders`, getAllOrders);
app.post(`${urlPrefix}/orders/add`, addNewOrder);
app.delete(`${urlPrefix}/orders/delete/:id`, deleteOrder);

app.get(`${urlPrefix}/reservations`, getAllReservations);
app.post(`${urlPrefix}/reservations/add`, addNewReservation);
app.delete(`${urlPrefix}/reservations/delete/:id`, deleteReservation);

app.get(`${urlPrefix}/users`, authUser);
app.post(`${urlPrefix}/users/register`, registerUser);
app.delete(`${urlPrefix}/users/delete/:phone`, deleteUser);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  process.env.NODE_ENV === "development" &&
    console.log(
      "\x1b[35m",
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}\nhttp://localhost:${PORT}/`
    )
);

export default app;
