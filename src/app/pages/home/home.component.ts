import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts:any = [];
  private productService= inject(ProductService)

  constructor() { }

  ngOnInit(): void {
    // Select featured products (example: first 4 products)
    this.featuredProducts = this.productService.getProducts().slice(0,4);
  }
}
