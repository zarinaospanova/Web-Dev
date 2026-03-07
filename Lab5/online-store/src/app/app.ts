import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PRODUCTS, CATEGORIES } from './data/catalog.data';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories = CATEGORIES;
  selectedCategoryId: number | null = null;

  products: Product[] = PRODUCTS.map(p => ({ ...p, isFavorite: p.isFavorite ?? false }));
  favorites: Product[] = [];

  year = new Date().getFullYear();

  get selectedProducts(): Product[] {
    return this.selectedCategoryId === null
      ? this.products
      : this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
  }

  toggleFavorite(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;
    this.favorites = this.products.filter(p => p.isFavorite);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
    this.favorites = this.products.filter(p => p.isFavorite);
  }
}
