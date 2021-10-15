import { foodsDB } from "../utils/database.js";

let cache = [];

export async function getAllFoods(req, res) {
  if (!Array.isArray(cache) || !cache.length) {
    await foodsDB.read();
    cache = foodsDB.data;
  }
  res.send(cache);
}
