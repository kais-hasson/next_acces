import {IsEnum, IsNotEmpty } from 'class-validator';
export class CreateCheckoutDto {
    cart :string;
 @IsEnum(['on_delivery','bank_account'])
 payment:'on_delivary'|'bank_account';
 @IsEnum(['pickup','aramax'])
 shipping:'pickup' | 'aramax';


}
