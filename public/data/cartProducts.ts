import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";

export type CartType = {
  id: string;
  product: string;
  price: number;
  image: any;
  quantity: number;
  size: string;
  color: string;
};

const cartData: CartType[] = [
  {
    id: "1",
    product: "Ladies Off Shoulder Slit Hem Cable Party Dress with Belt",
    price: 200,
    image: Product1,
    quantity: 1,
    size: "Small",
    color: "Black",
  },
  {
    id: "2",
    product: "Woman Square Solid Tassel Large Messenger Handbag",
    price: 250,
    image: Product2,
    quantity: 1,
    size: "Large",
    color: "Brown",
  },
  {
    id: "3",
    product: "Men'S Lightweight Shoes - Casual Athletic Sneakers",
    price: 300,
    image: Product3,
    quantity: 1,
    size: "Small",
    color: "Black",
  },
];

export default cartData;
