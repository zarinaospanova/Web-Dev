import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input({ required: true }) product!: Product;

  @Output() delete = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>(); // ✅ NEW

  activeImage = '';

  ngOnInit() {
    this.activeImage = this.product.image;

    if (!this.product.images || this.product.images.length === 0) {
      this.product.images = [this.product.image, this.product.image, this.product.image, this.product.image];
    }
  }

  onToggleFavorite() { // ✅ NEW
    this.toggleFavorite.emit(this.product.id);
  }

  setImage(img: string) {
    this.activeImage = img;
  }

  like() {
    this.product.likes++;
  }

  remove() {
    if (confirm('Delete this product?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    const text = `${this.product.name} - ${this.product.link}`;
    window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
  }

  shareTelegram() {
    window.open(
      'https://t.me/share/url?url=' + encodeURIComponent(this.product.link) +
      '&text=' + encodeURIComponent(this.product.name),
      '_blank'
    );
  }

  stars(): number[] { return [1,2,3,4,5]; }
  isFull(star: number): boolean { return this.product.rating >= star; }
  isHalf(star: number): boolean { return this.product.rating >= star - 0.5 && this.product.rating < star; }
}
