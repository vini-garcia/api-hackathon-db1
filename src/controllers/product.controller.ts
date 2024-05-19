import { Request, Response } from "express";
import { ProductRead } from "../interfaces/product.interface";
import productService from "../services/product.service";

const readController = async (request: Request, response: Response): Promise<Response> => {
  const products: ProductRead = await productService.readService();
  return response.status(200).json(products);
};

const retrieveController = async (request: Request, response: Response): Promise<Response> => {
  return response.status(200).json(response.locals.product);
};

export default { readController, retrieveController };
