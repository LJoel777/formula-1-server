import express from "express";
import { loadDriversData, Driver } from "./data";

const app = express();
const port = 3000;
const drivers: Driver[] = loadDriversData();

app.use("/static", express.static("public/static"));

app.get("/api/drivers", (req, res) => {
  res.json(drivers);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
