import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, title: 'Product 1', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 2, title: 'Product 2', description: 'Description 2', image: 'assets/image2.jpg' },
    { id: 3, title: 'Product 3', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 4, title: 'Product 4', description: 'Description 2', image: 'assets/image2.jpg' },
    { id: 5, title: 'Product 5', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 6, title: 'Product 6', description: 'Description 2', image: 'assets/image2.jpg' },
    { id: 7, title: 'Product 7', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 8, title: 'Product 8', description: 'Description 2', image: 'assets/image2.jpg' },
    { id: 9, title: 'Product 9', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 10, title: 'Product 10', description: 'Description 2', image: 'assets/image2.jpg' },
    { id: 11, title: 'Product 11', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 12, title: 'Product 13', description: 'Description 2', image: 'assets/image2.jpg' },
    { id: 13, title: 'Product 14', description: 'Description 1', image: 'assets/image1.jpg' },
    { id: 14, title: 'Product 14', description: 'Description 2', image: 'assets/image2.jpg' },
    // Add more dummy products
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    console.log(typeof(id), id);

    return this.products.find(product => product.id === id);
  }
}
