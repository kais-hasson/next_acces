import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
  @InjectRepository(Product) private productsRepository : Repository<Product>,){}
  create(CreateProductDto: CreateProductDto) {
    const newProducts = this.productsRepository.create(CreateProductDto);
    return this.productsRepository.save(newProducts);
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({id});
  }
  findtype(type:string) {
    return this.productsRepository.findBy({type});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
      const product = await this.findOne(id);
      return this.productsRepository.save({...product,...updateProductDto});
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productsRepository.delete(product);
  }
}
