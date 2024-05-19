import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";

type ProductRead = Array<Product>;
type ProductRepo = Repository<Product>;

export { ProductRead, ProductRepo };
