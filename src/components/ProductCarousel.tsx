"use client";

import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Import product images
import headphones from "@/assets/product-headphones.jpg";
import watch from "@/assets/product-watch.jpg";
import phone from "@/assets/product-phone.jpg";

const products = [
  {
    id: 1,
    image: headphones,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
  },
  {
    id: 2,
    image: watch,
    name: "Luxury Smart Watch",
    price: 599,
    originalPrice: 799,
  },
  {
    id: 3,
    image: phone,
    name: "Flagship Smartphone",
    price: 899,
    originalPrice: 1199,
  },
  {
    id: 4,
    image: headphones,
    name: "Studio Monitor Headphones",
    price: 399,
  },
  {
    id: 5,
    image: watch,
    name: "Sport Edition Watch",
    price: 449,
  },
  {
    id: 6,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
  {
    id: 7,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
  {
    id: 8,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
  {
    id: 9,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
  {
    id: 10,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
  {
    id: 11,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
  {
    id: 12,
    image: phone,
    name: "Pro Max Smartphone",
    price: 1099,
  },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Best Sellers
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular premium products
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-border/20 hover:bg-card"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-border/20 hover:bg-card"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pt-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-72">
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
