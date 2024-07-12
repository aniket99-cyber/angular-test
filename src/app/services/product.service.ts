import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      title: 'Laptop',
      description: 'Powerful laptop with high performance features. Ideal for work and entertainment.',
      image: '../../assets/images/laptop.jpg',
      inch: 15.6,
      displayType: 'Full HD LED'
    },
    {
      id: 2,
      title: 'Smartphone',
      description: 'Latest smartphone with advanced camera, vivid AMOLED display, and fast processor. Perfect for mobile enthusiasts.',
      image: '../../assets/images/phone.jpg',
      inch: 6.5,
      displayType: 'AMOLED'
    },
    {
      id: 3,
      title: 'Headphones',
      description: 'Wireless headphones with active noise cancellation, Bluetooth connectivity, and long battery life. Enjoy immersive sound quality wherever you go.',
      image: '../../assets/images/headphone.jpg',
    },
    {
      id: 4,
      title: 'Camera',
      description: 'Professional camera with high-resolution sensor, 4K video recording capabilities, and advanced autofocus system. Capture stunning images and videos.',
      image: '../../assets/images/camera.jpg',
    },
    {
      id: 5,
      title: 'Smartwatch',
      description: 'Fitness smartwatch with heart rate monitoring, GPS tracking, water resistance, and customizable watch faces. Stay connected and motivated during workouts.',
      image: '../../assets/images/smartwatch.jpg',
      inch: 3,
      displayType: 'AMOLED'
    },
    {
      id: 6,
      title: 'Tablet',
      description: 'Portable tablet with a large 10-inch display, multitouch capabilities, and powerful processor. Perfect for productivity and entertainment on the go.',
      image: '../../assets/images/tab.jpg',
      inch: 10,
      displayType: 'LCD'
    },
    {
      id: 7,
      title: 'Wireless Speaker',
      description: 'Bluetooth speaker with 360-degree sound, waterproof design, and built-in voice assistant. Enjoy high-quality audio anywhere.',
      image: '../../assets/images/speaker.jpg'
    },
    {
      id: 8,
      title: 'Gaming Console',
      description: 'Next-gen gaming console with 4K gaming support, high-speed SSD storage, and immersive graphics. Experience the future of gaming.',
      image: '../../assets/images/game.jpg',
    },
    {
      id: 9,
      title: 'External Hard Drive',
      description: 'High-capacity external hard drive with USB 3.0 connectivity, fast data transfer speeds, and durable design. Store and backup your important files securely.',
      image: '../../assets/drive.jpg',
    },
    {
      id: 10,
      title: 'Printer',
      description: 'Wireless printer with color printing capabilities, mobile printing support, and automatic document feeder. Ideal for home and office use.',
      image: '../../assets/images/printer.jpg',
    }
  ];


  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    console.log(typeof(id), id);

    return this.products.find(product => product.id === id);
  }
}
