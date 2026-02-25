import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from '../../components/product-card/product-card';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = PRODUCTS;

  searchQuery: string = '';
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }
}
