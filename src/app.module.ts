import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

require('detenv').config();

const db_options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

console.log(db_options);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...db_options,
      entities: [Product],
      synchronize: true,
    }),
    ProductsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
