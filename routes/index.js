import express from "express";
import { getAllFoods } from "../Controllers/food.js";
import {
  addNewOrder,
  deleteOrder,
  getAllOrders,
} from "../Controllers/order.js";
import { authUser, deleteUser, registerUser } from "../Controllers/user.js";
import {
  addNewReservation,
  deleteReservation,
  getAllReservations,
} from "../Controllers/reservations.js";

const router = express.Router();
const urlPrefix = "/api/v1";

router.get(`${urlPrefix}/foods`, getAllFoods);

router.get(`${urlPrefix}/orders`, getAllOrders);
router.post(`${urlPrefix}/orders/add`, addNewOrder);
router.delete(`${urlPrefix}/orders/delete/:id`, deleteOrder);

router.get(`${urlPrefix}/reservations`, getAllReservations);
router.post(`${urlPrefix}/reservations/add`, addNewReservation);
router.delete(`${urlPrefix}/reservations/delete/:id`, deleteReservation);

router.get(`${urlPrefix}/users`, authUser);
router.post(`${urlPrefix}/users/register`, registerUser);
router.delete(`${urlPrefix}/users/delete/:phone`, deleteUser);

export default router;
