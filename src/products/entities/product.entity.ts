import { Cart } from "src/cart/entities/cart.entity";
import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne} from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id :number;
    @Column('varchar', { length: 100 })
    name :string;
    @Column({type:"float"})
    price: string ;
    @Column()
    type:string;
    @Column()
    description:string;
    @OneToMany(type=>Cart,(cart)=>cart.product)
    cart:Cart[];
}
