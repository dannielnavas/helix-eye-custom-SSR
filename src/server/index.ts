import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { template } from "./render/template";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send(template(`<h1>Hello, World! ${req.url}</h1>`));
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
