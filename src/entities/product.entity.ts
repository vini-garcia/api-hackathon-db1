import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  category: string;

  @Column()
  price: number;

  @Column({ length: 255 })
  img: string;

  @Column({ length: 255 })
  description: string;

  @Column({ type: "boolean", default: false })
  inStock: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
