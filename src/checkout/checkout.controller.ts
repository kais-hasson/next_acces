import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers, NotFoundException, BadRequestException, ValidationPipe } from '@nestjs/common';
import { throwError } from 'rxjs';
import { UpdateAccountDto } from 'src/accounts/dto/update-account.dto';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';


@Controller('checkout')
export class CheckoutController {

  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  create(@Body('{cart,payment,shipping}',new ValidationPipe()) @Headers('account_id') createCheckoutDto: CreateCheckoutDto) {
    try{
      return this.checkoutService.create(createCheckoutDto) ;
    }catch(error){
      throw new BadRequestException;
      
    }
  }

  @Get()
  findAll() {
    try{
      return this.checkoutService.findAll();
    }catch(error){
      throw new NotFoundException;
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
      return this.checkoutService.findOne(+id);
    }catch(error){
      throw new NotFoundException;
    }
}}
