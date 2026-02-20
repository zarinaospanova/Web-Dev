import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 128Gb (черный)',
    description: 'Смартфон с Dynamic Island, мощным чипом и отличной камерой. Подходит для фото, видео и повседневных задач.',
    price: 399990,
    rating: 4.8,
    image: 'products/iphone15/main1.jpg',
    images: [
      'products/iphone15/11.jpg',
      'products/iphone15/21.jpg',
      'products/iphone15/31.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
  }, //  [oai_citation:0‡Kaspi](https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?srsltid=AfmBOorAxXfasJl2dObCi_VT_xLsdDJGYCV-cIVt2eHKAQn99ZzJ2BaL&utm_source=chatgpt.com)
  {
    id: 2,
    name: 'Xiaomi Redmi Note 13 Pro 4G NFC 8/256 (зеленый)',
    description: 'Большой экран, хорошая камера и быстрая зарядка. Отличный вариант по цене/качеству.',
    price: 139990,
    rating: 4.7,
    image: 'products/redmi13pro/main2.jpg',
    images: [
      'products/redmi13pro/12.jpg',
      'products/redmi13pro/22.jpg',
      'products/redmi13pro/32.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-nfc-8-gb-256-gb-zelenyi-115966726/',
  }, //  [oai_citation:1‡Kaspi](https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-nfc-8-gb-256-gb-zelenyi-115966726/?srsltid=AfmBOooxsMpTTuDmGKrELbTxAi1lpQf5hhQqKaVcIxzCJHPBxtutd7fe&utm_source=chatgpt.com)
  {
    id: 3,
    name: 'Apple AirPods Pro 2nd generation (белый)',
    description: 'Активное шумоподавление, отличное качество звука и удобство. Идеальны для iPhone и Mac.',
    price: 109990,
    rating: 4.9,
    image: 'products/airpodspro2/main3.jpg',
    images: [
      'products/airpodspro2/13.jpg',
      'products/airpodspro2/23.jpg',
      'products/airpodspro2/33.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/',
  }, //  [oai_citation:2‡Kaspi](https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/?srsltid=AfmBOoqCdvzWn664nqUSImeM0JCdM8aHaS21a6g88sPv_-X-ut7o_74z&utm_source=chatgpt.com)
  {
    id: 4,
    name: 'Sony PlayStation 5 Slim',
    description: 'Популярная игровая приставка нового поколения. Быстрая загрузка игр и отличная графика.',
    price: 279990,
    rating: 4.9,
    image: 'products/ps5slim/main4.jpg',
    images: [
      'products/ps5slim/14.jpg',
      'products/ps5slim/24.jpg',
      'products/ps5slim/34.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/',
  }, //  [oai_citation:3‡Kaspi](https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?srsltid=AfmBOop6-yHXIbUWAiK1vdYwwK4IefalVYJ7bvG4Ec0XzilsFKA-U5sj&utm_source=chatgpt.com)
  {
    id: 5,
    name: 'Apple MacBook Air 15 2023 8/256 (MQKP3RU/A)',
    description: 'Легкий ноутбук с большим экраном. Отлично подходит для учебы, работы и разработки.',
    price: 699990,
    rating: 4.8,
    image: 'products/macbookair15/main5.jpg',
    images: [
      'products/macbookair15/15.jpg',
      'products/macbookair15/25.jpg',
      'products/macbookair15/35.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkp3ru-a-111217765/',
  }, //  [oai_citation:4‡Kaspi](https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkp3ru-a-111217765/?srsltid=AfmBOorUGOYlMwo7-DzNqLUM1BHtVxrDAY86YtAfVUzOzYplCP3yL5Ld&utm_source=chatgpt.com)
  {
    id: 6,
    name: 'Apple iPad 10th gen 2024 10.9" 4/64 (синий)',
    description: 'Планшет для учебы, заметок, чтения и контента. Удобный большой экран.',
    price: 209990,
    rating: 4.7,
    image: 'products/ipad10/main6.jpg',
    images: [
      'products/ipad10/16.jpg',
      'products/ipad10/26.jpg',
      'products/ipad10/36.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10th-gen-2024-10-9-djuim-4-gb-64-gb-sinii-132992660/',
  }, //  [oai_citation:5‡Kaspi](https://kaspi.kz/shop/p/apple-ipad-10th-gen-2024-10-9-djuim-4-gb-64-gb-sinii-132992660/?srsltid=AfmBOoruRqiVEslkaZCaq3xUAHAsH-KO4DY1lS5QTT5ldL1DquEdgMJb&utm_source=chatgpt.com)
  {
    id: 7,
    name: 'Sony WH-1000XM5 (черный)',
    description: 'Топовые наушники с шумоподавлением. Комфортные и с отличным звуком.',
    price: 189990,
    rating: 4.9,
    image: 'assets/products/xm5/main7.jpg',
    images: [
      'products/xm5/17.jpg',
      'products/xm5/27.jpg',
      'products/xm5/37.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
  }, //  [oai_citation:6‡Kaspi](https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?srsltid=AfmBOooKgbm3qkmGW4AS1bU8uiCXasPu2Y_Q6ERcnMEn8yti5EBroEeL&utm_source=chatgpt.com)
  {
    id: 8,
    name: 'Xiaomi Smart Band 8 Global (черный)',
    description: 'Фитнес-браслет с мониторингом активности и сна. Долго держит заряд.',
    price: 19990,
    rating: 4.6,
    image: 'assets/products/miband8/main8.jpg',
    images: [
      'products/miband8/18.jpg',
      'products/miband8/28.jpg',
      'products/miband8/38.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-global-version-chernyi-113260965/',
  }, //  [oai_citation:7‡Kaspi](https://kaspi.kz/shop/p/xiaomi-smart-band-8-global-version-chernyi-113260965/?srsltid=AfmBOoqPb7QWCnvJZxIU2fMR9dGcO6XMRwacaXwdeG9kBHrdTFKtPpn1&utm_source=chatgpt.com)
  {
    id: 9,
    name: 'Nintendo Switch OLED (белый)',
    description: 'Гибридная консоль: играй дома и в дороге. OLED экран яркий и контрастный.',
    price: 159990,
    rating: 4.8,
    image: 'products/switcholed/main9.jpg',
    images: [
      'products/switcholed/19.jpg',
      'products/switcholed/29.jpg',
      'products/switcholed/39.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/',
  }, //  [oai_citation:8‡Kaspi](https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?srsltid=AfmBOooPCA7WtwnE6Nd_iZZLKa_YeORvRR-9LKnSEHzOYkvpThKbxxmi&utm_source=chatgpt.com)
  {
    id: 10,
    name: 'Dyson V15 Detect Absolute (серебристый)',
    description: 'Мощный беспроводной пылесос с лазером для пыли и несколькими режимами уборки.',
    price: 399990,
    rating: 4.9,
    image: 'products/dysonv15/main10.jpg',
    images: [
      'products/dysonv15/110.jpg',
      'products/dysonv15/210.jpg',
      'products/dysonv15/310.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/',
  }, //  [oai_citation:9‡Kaspi](https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?srsltid=AfmBOopp_0WYqgrH079bq1XX9TruSfQz3h0zwSz6gWxNseZVEBm6h6q_&utm_source=chatgpt.com)
];

