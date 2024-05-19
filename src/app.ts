import "express-async-errors";
import express, { Application, json } from "express";
import handleError from "./middlewares/handleError.middleware";
import { productRouter } from "./routers/product.router";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: [/http:\/\/(localhost|127.0.0.1)(:\d+){0,1}$/],
    maxAge: 3600,
  })
);

app.use(json());

app.use("/products", productRouter);

app.use(handleError);

export default app;
