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

export type ProductType = {
  id: string;
  category: string;
  product: string;
  price: number;
  image: any;
  quantity: number;
};

const productsData: ProductType[] = [
  {
    id: "1",
    category: "Dresses",
    product: "Ladies Off Shoulder Slit Hem Cable Party Dress with Belt",
    price: 200,
    image: Product1,
    quantity: 1,
  },
  {
    id: "2",
    category: "Bags",
    product: "Woman Square Solid Tassel Large Messenger Handbag",
    price: 250,
    image: Product2,
    quantity: 1,
  },
  {
    id: "3",
    category: "Shoes",
    product: "Men'S Lightweight Shoes - Casual Athletic Sneakers",
    price: 300,
    image: Product3,
    quantity: 1,
  },
  {
    id: "4",
    category: "Jeweleries",
    product: "Ladies Crystal rings and pendant jewelery set",
    price: 1000,
    image: Product7,
    quantity: 1,
  },
  {
    id: "5",
    category: "Dresses",
    product:
      "Two Piece Blazer Sets Sleeveless Short Jacket High Waist Loose Pants",
    price: 900,
    quantity: 1,
    image: Product8,
  },
  {
    id: "6",
    category: "Bags",
    product: "Women's Fashion Shoulder Bag Crossbody Bag",
    price: 400,
    image: Product5,
    quantity: 1,
  },
  {
    id: "7",
    category: "Shoes",
    product: "acquered Leather Pumps Mid Heels Stiletto Wedding Bridal Shoes",
    price: 300,
    image: Product11,
    quantity: 1,
  },
  {
    id: "8",
    category: "Jeweleries",
    product: "Women Chord With Sparkling Zirconia Jewelery Set",
    price: 350,
    image: Product12,
    quantity: 1,
  },
  {
    id: "9",
    category: "Dresses",
    product: "Silky Trending Ladies 2set/ Top And Pant",
    price: 300,
    image: Product4,
    quantity: 1,
  },
  {
    id: "10",
    category: "Bags",
    product: "Woman Square Solid Tassel Large Messenger Handbag ",
    price: 700,
    image: Product9,
    quantity: 1,
  },
  {
    id: "11",
    category: "Dresses",
    product: "Sexy Strapless  Dress Front Slit Bare Shoulder ",
    price: 600,
    image: Product10,
    quantity: 1,
  },
  {
    id: "12",
    category: "Shoes",
    product: "Martin Ankle Pocket Boots For Women Party Dress Work Shoes",
    price: 200,
    image: Product6,
    quantity: 1,
  },
];

export default productsData;
