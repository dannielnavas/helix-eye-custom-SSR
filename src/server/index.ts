import axios from "axios";
import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { render } from "./render";

const app: Express = express();

app.use(express.static("dist"));

app.get("/galaxias", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      "https://images-api.nasa.gov/search?q=galaxies"
    );
    console.log(data);
    const initialsProps = {
      galaxies: data?.collection?.items,
    };
    res.send(render(req.url, initialsProps));
  } catch (error) {
    throw new Error(error);
  }
});

app.get("*", (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.get("/", (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
