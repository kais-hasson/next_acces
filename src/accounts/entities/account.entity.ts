import { type } from "os";
import { Cart } from "src/cart/entities/cart.entity";
import { Checkout } from "src/checkout/entities/checkout.entity";
import { Entity,Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinColumn, OneToOne} from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id :number;
    @Column('varchar', { length: 50 })
    firstname :string;
    @Column('varchar', { length: 50 })
    lastname :string;
    @Column('varchar', { length: 50 })
    phonenumber :string;
    @Column('varchar', { length: 70 })
    countries :string;
    @Column('varchar', { length: 70 })
    cities :string;
    @Column('varchar', { length: 255 })
    address:string;
    @Column({type:'bigint'})
    checkoutCount:string;
    @OneToMany(type=>Checkout,(checkout)=>checkout.account)
    checkout:Checkout[];
    @OneToOne(type=>Cart,(cart)=>cart.account)
    @JoinColumn()
    cart:Cart[];
}




