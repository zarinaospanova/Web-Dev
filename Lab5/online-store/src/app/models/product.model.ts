export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  rating: number;      // can be 4.5 etc

  image: string;       // main image
  images: string[];    // 4 images

  link: string;        // kaspi link
  likes: number;       // starts at 0
}
