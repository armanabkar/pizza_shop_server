import { Low, JSONFile } from "lowdb";

const ordersAdapter = new JSONFile("data/orders.json");
const foodsAdapter = new JSONFile("data/foods.json");
const usersAdapter = new JSONFile("data/users.json");
export const ordersDB = new Low(ordersAdapter);
export const foodsDB = new Low(foodsAdapter);
export const usersDB = new Low(usersAdapter);
