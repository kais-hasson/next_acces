import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter } from 'stream';
import { Repository } from 'typeorm';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import { Checkout } from './entities/checkout.entity';
import { CheckoutCreatedEvent } from 'dist/checkout/dto/events/checkout-created.event';


@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(Checkout) private checkoutRepository : Repository<Checkout> ,private readonly eventEmitter:EventEmitter){}
  create(createCheckoutDto: CreateCheckoutDto) {
    const newcheckout = this.checkoutRepository.create(createCheckoutDto);
    return this.checkoutRepository.save(newcheckout);
    const checkout_cart_count=+1;
    this.eventEmitter.emit('checkout.created',new CheckoutCreatedEvent(checkout_cart_count));

  }

  findAll() {
    return this.checkoutRepository.find();
  }

  findOne(id: number) {
    return this.checkoutRepository.findOneBy({id});
  }

  async update(id: number, updateCheckoutDto: UpdateCheckoutDto) {
    const checkout = await this.findOne(id);
    return this.checkoutRepository.save({...Checkout, ...updateCheckoutDto});
  }

    async remove(id: number) { 
      const checkout = await this.findOne(id);
      return this.checkoutRepository.remove(checkout);
  }
}
