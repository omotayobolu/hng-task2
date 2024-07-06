import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.png";
import Product6 from "../assets/product6.png";
import Product7 from "../assets/product7.png";
import Product8 from "../assets/product8.png";
import Product9 from "../assets/product9.png";
import Product10 from "../assets/product10.png";
import Product11 from "../assets/product11.png";
import Product12 from "../assets/product12.png";

interface Product {
  id: string;
  category: string;
  product: string;
  price: number;
  isFavourite: boolean;
  image: any;
}

const productsData: Product[] = [
  {
    id: "1",
    category: "dresses",
    product: "Ladies Off Shoulder Slit Hem Cable Party Dress with Belt",
    price: 200,
    isFavourite: false,
    image: Product1,
  },
  {
    id: "2",
    category: "bags",
    product: "Woman Square Solid Tassel Large Messenger Handbag",
    price: 200,
    isFavourite: false,
    image: Product2,
  },
  {
    id: "3",
    category: "shoes",
    product: "Men'S Lightweight Shoes - Casual Athletic Sneakers",
    price: 200,
    isFavourite: false,
    image: Product3,
  },
  {
    id: "4",
    category: "jewellry",
    product: "Ladies Crystal rings and pendant jewelery set",
    price: 200,
    isFavourite: false,
    image: Product4,
  },
  {
    id: "5",
    category: "dresses",
    product:
      "Two Piece Blazer Sets Sleeveless Short Jacket High Waist Loose Pants",
    price: 200,
    isFavourite: false,
    image: Product5,
  },
  {
    id: "6",
    category: "bags",
    product: "Women's Fashion Shoulder Bag Crossbody Bag",
    price: 200,
    isFavourite: false,
    image: Product6,
  },
  {
    id: "7",
    category: "shoes",
    product: "acquered Leather Pumps Mid Heels Stiletto Wedding Bridal Shoes",
    price: 200,
    isFavourite: false,
    image: Product7,
  },
  {
    id: "8",
    category: "jewllry",
    product: "Women Chord With Sparkling Zirconia Jewelery Set",
    price: 200,
    isFavourite: false,
    image: Product8,
  },
  {
    id: "9",
    category: "dresses",
    product: "Silky Trending Ladies 2set/ Top And Pant",
    price: 200,
    isFavourite: false,
    image: Product9,
  },
  {
    id: "10",
    category: "bags",
    product: "Woman Square Solid Tassel Large Messenger Handbag ",
    price: 200,
    isFavourite: false,
    image: Product10,
  },
  {
    id: "11",
    category: "dresses",
    product: "Sexy Strapless  Dress Front Slit Bare Shoulder ",
    price: 200,
    isFavourite: false,
    image: Product11,
  },
  {
    id: "12",
    category: "shoes",
    product: "Martin Ankle Pocket Boots For Women Party Dress Work Shoes",
    price: 200,
    isFavourite: false,
    image: Product12,
  },
];
