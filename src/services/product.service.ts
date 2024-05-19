import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";
import { ProductRead, ProductRepo } from "../interfaces/product.interface";

const readService = async (): Promise<ProductRead> => {
  const repo: ProductRepo = AppDataSource.getRepository(Product);
  return await repo.find();
};

export default { readService };
