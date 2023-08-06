import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entities/account.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutModule } from './checkout/checkout.module';
import { Checkout } from './checkout/entities/checkout.entity';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
     type :'mysql',
     host :'localhost',
     port :3306,
     username :'root', 
     password :'kais2962',
     database :'next_test',
     entities : ['dist/**/*.entity.js'],
     synchronize : true,
    }),
    ProductsModule,
    AccountsModule,
    CheckoutModule,
    CartModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

private newMethod() {
  return true;
}
}
