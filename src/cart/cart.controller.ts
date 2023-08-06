import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('')
  
  async findAll():Promise<Cart[]> {
    try{
    return await this.cartService.findAll();
  }catch(error){
    throw new NotFoundException;
  }
  }
  @Post()

  create(@Body() createCartDto: CreateCartDto) {
    try{
    return this.cartService.create(createCartDto);
  }catch(error){
    throw new BadRequestException;
  }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
    return this.cartService.findOne(+id);
  }catch(error){
    throw new NotFoundException;
  }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('ammount') updateCartDto: UpdateCartDto) {
    try{
    return this.cartService.update(+id, updateCartDto);
  }catch(error){
    throw new BadRequestException;
  }
  }

  @Delete(':id')
 
  remove(@Param('id') id: string) {
    try{
    return this.cartService.remove(+id);
  }catch(error){
    throw new NotFoundException;
  }}
  
}
