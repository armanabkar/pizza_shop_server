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

    res.send("Order created");
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteOrder(req, res) {
  const orderIndex = ordersDB.data.indexOf(
    ordersDB.data.find((order) => order.id == req.params.id)
  );
  if (orderIndex === -1) {
    res.status(404).send("Order not found");
    return;
  }

  try {
    ordersDB.data.splice(orderIndex, 1);
    await ordersDB.write();

    res.send("Order deleted");
  } catch (error) {
    res.status(400).send(error);
  }
}
