import { v1 } from "uuid";
import { ordersDB } from "../utils/database.js";

await ordersDB.read();

export async function getAllOrders(req, res) {
  res.send(ordersDB.data);
}

export async function addNewOrder(req, res) {
  try {
    const order = {
      id: req.body.id || v1(),
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      items: req.body.items,
      totalPrice: req.body.totalPrice,
    };
    ordersDB.data.push(order);
    await ordersDB.write();
    res.status(200).send("Order created");
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteOrder(req, res) {
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
}
