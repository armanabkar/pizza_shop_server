import { foodsDB } from "../data/database.js";

await foodsDB.read();

export async function getAllFoods(req, res) {
  res.send(foodsDB.data);
}
