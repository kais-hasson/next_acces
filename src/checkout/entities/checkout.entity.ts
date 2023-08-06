
import { type } from "os";
import { Account } from "src/accounts/entities/account.entity";
import { Entity,Column, PrimaryGeneratedColumn, IntegerType, ManyToOne, OneToMany} from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
export type payment = 'on_delivary'|'bank_account';
export type shipping = 'pickup' | 'aramax';
@Entity()

export class Checkout {
 @PrimaryGeneratedColumn()
 id :number;
 @Column('text')
 cart :string; 
 @Column({
     type:'enum',
     enum:['on_delivary','bank_account'],
 })
 payment: payment;
 @Column({
    type:'enum',
    enum:['pickup' , 'aramax'],
})
shipping: shipping;
 @ManyToOne(type=>Account,(account)=>account.checkout)
 account:Account;
}