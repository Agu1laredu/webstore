import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Sofá Chesterfield',
        description:
          'Sofá tapizado en cuero de alta calidad con patas de madera maciza. Disponible en varios colores y tamaños.',
        price: 1000,
        image: 'https://www.example.com/images/chesterfield.jpg',
        category: 'sofas',
        stock: 10,
      },
      {
        id: 2,
        name: 'Mesa de centro de vidrio',
        description:
          'Mesa de centro de diseño moderno con base de metal y superficie de vidrio templado. Disponible en varios tamaños.',
        price: 500,
        image: 'https://www.example.com/images/mesa_centro_vidrio.jpg',
        category: 'mesas',
        stock: 5,
      },
      {
        id: 3,
        name: 'Silla de comedor',
        description:
          'Silla de comedor de diseño clásico con estructura de madera maciza y tapizado en tela resistente. Disponible en varios colores.',
        price: 200,
        image: 'https://www.example.com/images/silla_comedor.jpg',
        category: 'sillas',
        stock: 15,
      },
      // y así sucesivamente con el resto de productos...
    ];
  }
  create(createProductDto: CreateProductDto) {
    return this.products.push(createProductDto);
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.products = this.products.filter((p) => p.id !== id);
    this.products.push(updateProductDto);
    return updateProductDto;
  }

  remove(id: number) {
    const eliminar = this.products.find((p) => p.id === id);
    this.products = this.products.filter((p) => p.id !== id);
    return eliminar;
  }
}
