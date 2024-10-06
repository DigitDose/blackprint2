import { StaticImageData } from 'next/image';
import cap1 from "../../public/images/1.jpg";
import cap2 from "../../public/images/2.jpg";
import cap3 from "../../public/images/3.jpg";
import cap4 from "../../public/images/4.jpg";
import cap5 from "../../public/images/5.jpg";
import cap6 from "../../public/images/6.jpg";
import tshirt1 from "../../public/images/1.jpg";
import tshirt2 from "../../public/images/2.jpg";
import tshirt3 from "../../public/images/3.jpg";
import tshirt4 from "../../public/images/4.jpg";
import tshirt5 from "../../public/images/5.jpg";
import tshirt6 from "../../public/images/6.jpg";
import hoodie1 from "../../public/images/1.jpg";
import hoodie2 from "../../public/images/2.jpg";
import hoodie3 from "../../public/images/3.jpg";
import hoodie4 from "../../public/images/4.jpg";
import hoodie5 from "../../public/images/5.jpg";
import hoodie6 from "../../public/images/6.jpg";

export type Product = {
  id: number;
  name: string;
  category: 'cap' | 'tshirt' | 'hoodie';
  image: StaticImageData;
  videoUrl?: string; // Dodaj to pole
  description: string;
  price: number;
};

const galleryProducts: Product[] = [
  { 
    id: 1, 
    name: "Classic Cap", 
    category: "cap", 
    image: cap1, 
    videoUrl: "/videos/classic_cap.mp4", // Dodaj to pole
    description: "A timeless cap design for everyday wear.", 
    price: 19.99 
  },
  { id: 2, name: "Sports Cap", category: "cap", image: cap2, description: "Perfect for athletes and sports enthusiasts.", price: 24.99 },
  { id: 3, name: "Vintage Cap", category: "cap", image: cap3, description: "Retro-inspired cap with a modern twist.", price: 22.99 },
  { id: 4, name: "Snapback Cap", category: "cap", image: cap4, description: "Adjustable snapback for a perfect fit.", price: 21.99 },
  { id: 5, name: "Trucker Cap", category: "cap", image: cap5, description: "Breathable mesh back for hot summer days.", price: 18.99 },
  { id: 6, name: "Flat Brim Cap", category: "cap", image: cap6, description: "Stylish flat brim for a bold look.", price: 23.99 },
  { id: 7, name: "Basic Tee", category: "tshirt", image: tshirt1, description: "Essential cotton t-shirt for everyday comfort.", price: 14.99 },
  { id: 8, name: "Graphic Tee", category: "tshirt", image: tshirt2, description: "Eye-catching graphic design t-shirt.", price: 19.99 },
  { id: 9, name: "V-Neck Tee", category: "tshirt", image: tshirt3, description: "Classic V-neck style for a sleek look.", price: 16.99 },
  { id: 10, name: "Long Sleeve Tee", category: "tshirt", image: tshirt4, description: "Comfortable long sleeve t-shirt for cooler days.", price: 24.99 },
  { id: 11, name: "Pocket Tee", category: "tshirt", image: tshirt5, description: "Casual t-shirt with a handy chest pocket.", price: 17.99 },
  { id: 12, name: "Striped Tee", category: "tshirt", image: tshirt6, description: "Stylish striped pattern t-shirt.", price: 18.99 },
  { id: 13, name: "Zip-Up Hoodie", category: "hoodie", image: hoodie1, description: "Versatile zip-up hoodie for layering.", price: 39.99 },
  { id: 14, name: "Pullover Hoodie", category: "hoodie", image: hoodie2, description: "Classic pullover hoodie for ultimate comfort.", price: 34.99 },
  { id: 15, name: "Oversized Hoodie", category: "hoodie", image: hoodie3, description: "Trendy oversized fit hoodie.", price: 44.99 },
  { id: 16, name: "Cropped Hoodie", category: "hoodie", image: hoodie4, description: "Fashionable cropped hoodie for a modern look.", price: 36.99 },
  { id: 17, name: "Tech Fleece Hoodie", category: "hoodie", image: hoodie5, description: "High-performance tech fleece hoodie.", price: 49.99 },
  { id: 18, name: "Graphic Hoodie", category: "hoodie", image: hoodie6, description: "Bold graphic print hoodie for making a statement.", price: 41.99 },
];

export default galleryProducts;