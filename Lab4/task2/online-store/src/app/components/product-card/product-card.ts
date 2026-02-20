import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {

  @Input({ required: true }) product!: Product;

  activeImg: string = '';

  ngOnInit(): void {
    this.activeImg = this.product.image;
  }

  setImg(url: string): void {
    this.activeImg = url;
  }

  getStars(rating: number): string {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return '★'.repeat(full) + '☆'.repeat(empty);
  }

  shareWhatsApp(): void {
    const text = 'Check out this product: ' + this.product.link;
    window.open(
      'https://wa.me/?text=' + encodeURIComponent(text),
      '_blank'
    );
  }

  shareTelegram(): void {
    window.open(
      'https://t.me/share/url?url=' +
      encodeURIComponent(this.product.link) +
      '&text=' +
      encodeURIComponent(this.product.name),
      '_blank'
    );
  }
}
