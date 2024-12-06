import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Slatki plavi slonić',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod quis.',
      price: 29.99,
      rating: 5.00,
      size: '8cm x 20cm',
      material: 'Pamuk',
      images: ['/assets/slon.jpeg', '/assets/slon.jpeg', '/assets/slon.jpeg']
    }
  ];

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
