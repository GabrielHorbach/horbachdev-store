import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryShop from "@/components/shop/CategoryShop";
import type { ShopProduct } from "@/components/shop/CategoryShop";
import headphones from "@/assets/product-headphones.jpg";
import watch from "@/assets/product-watch.jpg";
import phone from "@/assets/product-phone.jpg";
import Link from "next/link";

const allProducts: ShopProduct[] = [
  {
    id: 1,
    image: headphones,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    color: "Black",
  },
  {
    id: 2,
    image: watch,
    name: "Luxury Smart Watch",
    price: 599,
    originalPrice: 799,
    color: "Silver",
  },
  {
    id: 3,
    image: phone,
    name: "Flagship Smartphone",
    price: 899,
    originalPrice: 1199,
    color: "Black",
  },
  {
    id: 4,
    image: headphones,
    name: "Studio Monitor Headphones",
    price: 399,
    color: "White",
  },
  {
    id: 5,
    image: watch,
    name: "Sport Edition Watch",
    price: 449,
    color: "Blue",
  },
  {
    id: 6,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
    color: "Silver",
  },
  {
    id: 7,
    image: headphones,
    name: "Noise Cancelling Buds",
    price: 199,
    originalPrice: 249,
    color: "Black",
  },
  {
    id: 8,
    image: watch,
    name: "Classic Analog Watch",
    price: 349,
    color: "Gold",
  },
  {
    id: 9,
    image: phone,
    name: "Budget Smartphone",
    price: 499,
    originalPrice: 599,
    color: "White",
  },
  {
    id: 10,
    image: headphones,
    name: "Gaming Headset Pro",
    price: 279,
    color: "Blue",
  },
  {
    id: 11,
    image: watch,
    name: "Fitness Tracker Elite",
    price: 199,
    originalPrice: 299,
    color: "Black",
  },
  { id: 12, image: phone, name: "Ultra Slim Phone", price: 749, color: "Gold" },
];

const availableColors = ["Black", "White", "Silver", "Blue", "Gold"];

const colorSwatches: Record<string, string> = {
  Black: "bg-foreground",
  White: "bg-background border border-border",
  Silver: "bg-muted-foreground",
  Blue: "bg-blue-500",
  Gold: "bg-yellow-500",
};

export default function CategoryPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-8 flex gap-2">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Best Sellers</span>
      </nav>

      <CategoryShop
        products={allProducts}
        categoryName="Best Sellers"
        availableColors={availableColors}
        colorSwatches={colorSwatches}
      />
    </main>
  );
}
