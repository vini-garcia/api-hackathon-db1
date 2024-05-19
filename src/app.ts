import "express-async-errors";
import express, { Application, json } from "express";
import handleError from "./middlewares/handleError.middleware";
import { productRouter } from "./routers/product.router";

const app: Application = express();
app.use(json());

app.use("/products", productRouter);

app.use(handleError);

export default app;
