import express from "express";
import cors from "cors";
import rentalRouter from "./routers/rentalRouter.js";
import housesRouter from "./routers/housesRouter.js";
import clientsRouter from "./routers/clientsRouter.js";
import dotenv from "./loadEnv.js";

dotenv();

const server = express();
server.use(express.json());
server.use(cors());
server.use(rentalRouter);
server.use(housesRouter);
server.use(clientsRouter);

server.listen(4000, () => {
  console.log(`server running on port ${4000}`);
});
