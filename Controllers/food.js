import { foodsDB } from "../utils/database.js";

export async function getAllFoods(req, res) {
  await foodsDB.read();
  res.send(foodsDB.data);
}
