import express from "express";
import { Driver, loadDriversData } from "../data";

const router = express.Router();
const drivers: Driver[] = loadDriversData();

router.get("/", (_, res) => {
  res.json(drivers);
});

router.post("/:driverId/overtake", (req, res) => {
  const driverId = parseInt(req.params.driverId);

  const driverToOvertake = drivers.find((driver) => driver.id === driverId);

  if (!driverToOvertake) {
    return res.status(404).send("Driver not found");
  }

  const driverInFront = drivers.find(
    (currentDriver) => currentDriver.place === driverToOvertake.place - 1
  );

  if (!driverInFront) {
    return res.status(400).send("Driver cannot overtake");
  }

  // Swap the places of the two drivers
  [driverToOvertake.place, driverInFront.place] = [driverInFront.place, driverToOvertake.place];

  return res.status(200).send("Driver overtook successfully");
});

export { router as driversRouter };
