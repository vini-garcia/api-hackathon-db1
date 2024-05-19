import { NextFunction, Request, Response } from "express";
import { ProductRepo } from "../interfaces/product.interface";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";
import { AppError } from "../errors/App.error";

const verifyIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const repo: ProductRepo = AppDataSource.getRepository(Product);
  const id: number = Number(request.params.id);

  const productExists: Product | null = await repo.findOne({ where: { id } });
  if (!productExists) throw new AppError("Product not found", 404);

  response.locals = { ...response.locals, product: productExists };

  return next();
};

export default verifyIdExists;
