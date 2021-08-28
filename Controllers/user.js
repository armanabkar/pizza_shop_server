import { v1 } from "uuid";
import { usersDB } from "../utils/database.js";
import generateToken from "../utils/generateToken.js";

await usersDB.read();

export async function authUser(req, res) {
  const { phone } = req.body;

  const user = usersDB.data.find((user) => user.phone === phone);

  if (user) {
    res.json({
      name: user.name,
      phone: user.phone,
      address: user.address,
      token: generateToken(user.id),
    });
  } else {
    res.status(404).send("User does not exist");
  }
}

export async function registerUser(req, res) {
  const { name, address, phone } = req.body;
  const userExists = usersDB.data.find((user) => user.phone === phone);

  try {
    const newUser = {
      id: v1(),
      name: name,
      address: address,
      phone: phone,
    };
    if (!userExists) {
      if (
        name !== "undefined" &&
        address !== undefined &&
        phone !== undefined
      ) {
        usersDB.data.push(newUser);
        await usersDB.write();
        res.status(200).json({
          id: newUser.id,
          name: newUser.name,
          phone: newUser.phone,
          address: newUser.address,
          token: generateToken(newUser.id),
        });
      } else {
        res.status(400).send("Invalid user data");
      }
    } else {
      res.status(400).send("User already exists");
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteUser(req, res) {
  try {
    const userIndex = usersDB.data.indexOf(
      usersDB.data.find((user) => user.phone == req.params.phone)
    );

    if (userIndex !== -1) {
      usersDB.data.splice(userIndex, 1);
      await usersDB.write();
      res.status(200).send("User deleted");
    } else {
      res.status(404).send("User does not exist");
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
