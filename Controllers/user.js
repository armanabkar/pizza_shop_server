import { v1 } from "uuid";
import { usersDB } from "../utils/database.js";
import generateToken from "../utils/generateToken.js";

await usersDB.read();

export async function getAllUsers(req, res) {
  res.send(usersDB.data);
}

export async function loginUser(req, res) {
  const { phone } = req.body;

  const user = usersDB.data.find((user) => user.phone === phone);
  if (!user) {
    res.status(404).send("User does not exist");
    return;
  }

  res.json({
    name: user.name,
    phone: user.phone,
    address: user.address,
    token: generateToken(user.id),
  });
}

export async function registerUser(req, res) {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone || !+phone) {
    res.status(400).send("Invalid user data");
    return;
  }

  const userExists = usersDB.data.find((user) => user.phone === phone);
  if (userExists) {
    res.status(400).send("User already exists");
    return;
  }

  try {
    const newUser = {
      id: v1(),
      name: name,
      address: address,
      phone: phone,
    };
    usersDB.data.push(newUser);
    await usersDB.write();

    res.json({
      id: newUser.id,
      name: newUser.name,
      phone: newUser.phone,
      address: newUser.address,
      token: generateToken(newUser.id),
    });
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteUser(req, res) {
  const userIndex = usersDB.data.indexOf(
    usersDB.data.find((user) => user.phone == req.params.phone)
  );
  if (userIndex === -1) {
    res.status(404).send("User does not exist");
    return;
  }

  try {
    usersDB.data.splice(userIndex, 1);
    await usersDB.write();

    res.send("User deleted");
  } catch (error) {
    res.status(400).send(error);
  }
}
