import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
  @InjectRepository(Cart) private cartRepository: Repository<Cart>){}
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  async findAll():Promise<Cart[]> {
    //return `This action returns all cart`;
    return await this.cartRepository.createQueryBuilder('q')
    .leftJoinAndSelect(Product, 'p','q.id=p.id')
    .getMany();
  }

  findOne(id: number) {
  return this.cartRepository.findOneBy({id});
  }
  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
