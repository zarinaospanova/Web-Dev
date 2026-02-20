export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;      // KZT
  rating: number;     // 1..5
  image: string;      // main image (url or assets path)
  images: string[];   // min 3
  link: string;       // kaspi link
}
