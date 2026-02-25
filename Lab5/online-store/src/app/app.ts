import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PRODUCTS, CATEGORIES } from './data/catalog.data';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories = CATEGORIES;
  selectedCategoryId: number | null = null;

  // default = all products
  selectedProducts: Product[] = [...PRODUCTS];

  year = new Date().getFullYear();

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
    this.selectedProducts = id === null
      ? [...PRODUCTS]
      : PRODUCTS.filter(p => p.categoryId === id);
  }
}
