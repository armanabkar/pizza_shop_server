import { Low, JSONFile } from "lowdb";

const ordersAdapter = new JSONFile("data/orders.json");
const foodsAdapter = new JSONFile("data/foods.json");
export const ordersDB = new Low(ordersAdapter);
export const foodsDB = new Low(foodsAdapter);
