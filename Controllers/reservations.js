import { v1 } from "uuid";
import { reservationsDB } from "../utils/database.js";

await reservationsDB.read();

export async function getAllReservations(req, res) {
  res.send(reservationsDB.data);
}

export async function addNewReservation(req, res) {
  try {
    const reservation = {
      id: req.body.id || v1(),
      name: req.body.name,
      phone: req.body.phone,
      tableSize: req.body.tableSize,
      time: req.body.time,
      request: req.body.request,
    };
    reservationsDB.data.push(reservation);
    await reservationsDB.write();

    res.send("Reservation created");
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteReservation(req, res) {
  const reservationIndex = reservationsDB.data.indexOf(
    reservationsDB.data.find((reservation) => reservation.id == req.params.id)
  );
  if (reservationIndex === -1) {
    res.status(404).send("Reservation not found");
    return;
  }

  try {
    reservationsDB.data.splice(reservationIndex, 1);
    await reservationsDB.write();

    res.send("Reservation deleted");
  } catch (error) {
    res.status(400).send(error);
  }
}
