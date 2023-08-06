import { type } from "os";
import { Account } from "src/accounts/entities/account.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn,OneToOne, Entity, JoinColumn } from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";
@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'bigint'})
    amount:string;
    @ManyToOne(type=>Product,(product)=>product.cart)
    product:Product;
    @OneToOne(type=>Account,(account)=>account.cart)
    @JoinColumn()
    account:Account;
} 
