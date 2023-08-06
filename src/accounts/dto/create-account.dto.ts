import { Checkout } from "src/checkout/entities/checkout.entity";
import { isInt16Array, isInt8Array } from "util/types";
import {IsEnum,IsInt, IsNotEmpty,MinLength } from 'class-validator';
export class CreateAccountDto {
    @IsNotEmpty()
    firstname :string;
    @IsNotEmpty()
    lastname :string;
    @MinLength(10)
    phonenumber :string;
    @IsNotEmpty()
    countries :string;
    @IsNotEmpty()
    cities :string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    checkoutCount:string;
}
