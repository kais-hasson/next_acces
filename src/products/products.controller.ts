import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
  @Get()
  findAll() {
    try{
    return this.productsService.findAll();
  }catch(error){
    throw new NotFoundException;
  }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
    return this.productsService.findOne(+id);
  }catch(error){
    throw new NotFoundException;
  }
  }
  @Get(':type')
  findtype(@Param('type') type: string) {
    try{
    return this.productsService.findtype(type);
  }catch(error){
    throw new NotFoundException;
  }
  }
}
