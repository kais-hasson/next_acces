import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { Checkout } from './entities/checkout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Checkout])],
  controllers: [CheckoutController],
  providers: [CheckoutService]
})
export class CheckoutModule {}
