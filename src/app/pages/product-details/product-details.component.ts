import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MatCardModule } from '@angular/material/card';
import { OptimizedImageDirective } from 'src/app/directives/optimized-image.directive';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, OptimizedImageDirective],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product: any;
  private route= inject(ActivatedRoute);
  private productService= inject(ProductService);
  private meta = inject(Meta)
  constructor() {
    const id = this.route?.snapshot?.paramMap.get('id');
    this.product = this.productService.getProduct(Number(id));
  }

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: this.product.title });
    this.meta.updateTag({ name: 'description', content: this.product.description });
    this.meta.updateTag({ property: 'og:image', content: this.product.image });
  }
}
