import express from "express";
import { driversRouter } from "./routes";

const app = express();
const port = 3000;

app.use("/static", express.static("public/static"));

app.use("/api/drivers", driversRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
