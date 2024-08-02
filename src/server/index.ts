import express, { Express, Request, Response } from "express";
import { config } from "./config";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hola mundo con algo</h1>");
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
