import { z } from "zod";

const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  category: z.string().max(50),
  price: z.number().positive(),
  img: z.string().max(255),
  description: z.string().max(255),
  inStock: z.boolean(),
  createdAt: z.date(),
});

export default productSchema;
