import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/guards/product.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent{
  product: any;
  private route= inject(ActivatedRoute);
  private productService= inject(ProductService)
  constructor() {
    const id = this.route?.snapshot?.paramMap.get('id');
    this.product = this.productService.getProduct(Number(id));
  }
}
