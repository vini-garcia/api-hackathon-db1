import { Router } from "express";
import validadeIdExists from "../middlewares/validateIdExists.middleware";
import productController from "../controllers/product.controller";

export const productRouter: Router = Router();

productRouter.get("", productController.readController);

productRouter.use("/:id", validadeIdExists);

productRouter.get("/:id", productController.retrieveController);
