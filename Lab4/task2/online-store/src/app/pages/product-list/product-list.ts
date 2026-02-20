import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductListComponent {
  products = PRODUCTS;
}
