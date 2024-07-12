import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { RouterLink } from '@angular/router';
import { OptimizedImageDirective } from 'src/app/directives/optimized-image.directive';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})

export class ProductListingComponent {
  products:any = [];
  searchQuery = '';
  private productService= inject(ProductService)

  constructor() {
    this.products = this.productService.getProducts() || [];
  }

  search() {
    if (this.searchQuery) {
      this.products = this.productService.getProducts().filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.products = this.productService.getProducts();
    }
  }
}


