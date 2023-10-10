import express from "express";
import cors from "cors";
import { driversRouter } from "./routes";

const app = express();
const port = 8000;

app.use("/static", express.static("public/static"));
app.use(cors());

app.use("/api/drivers", driversRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
