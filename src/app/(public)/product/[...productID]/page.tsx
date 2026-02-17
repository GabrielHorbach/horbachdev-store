import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Minus,
  Plus,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
// import { useState } from "react";
import headphones from "@/assets/product-headphones.jpg";
import watch from "@/assets/product-watch.jpg";
import phone from "@/assets/product-phone.jpg";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

const productImages = [headphones, watch, phone];

export default function ProductDetail() {
  // const [selectedImage, setSelectedImage] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-8 flex gap-2">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Premium Wireless Headphones</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="product-card !p-0 overflow-hidden rounded-2xl">
            <Image
              // src={productImages[selectedImage]}
              src={productImages[0]}
              alt="Product"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="flex gap-3">
            {productImages.map((img, i) => (
              <button
                key={i}
                // onClick={() => setSelectedImage(i)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  // selectedImage === i
                  // ? "border-primary shadow-[0_0_12px_hsl(263_70%_65%/0.4)]"
                  // : "border-border/20 hover:border-border/50"
                  "border-border/20 hover:border-border/50"
                }`}
              >
                <Image src={img} alt="" className="w-20 h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="bg-primary/20 text-primary border-0 mb-3">
              Best Seller
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Premium Wireless Headphones
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                (128 reviews)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-primary">$299</span>
            <span className="text-xl text-muted-foreground line-through">
              $399
            </span>
            <Badge variant="destructive" className="text-xs">
              25% OFF
            </Badge>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Experience studio-quality sound with our premium wireless
            headphones. Featuring advanced noise cancellation, 40-hour battery
            life, and ultra-comfortable memory foam ear cushions for all-day
            listening.
          </p>

          {/* Color Selection */}
          <div>
            <span className="text-sm font-medium text-foreground mb-3 block">
              Color
            </span>
            <div className="flex gap-3">
              {["bg-foreground", "bg-muted-foreground", "bg-primary"].map(
                (color, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} ring-2 ring-offset-2 ring-offset-background ${
                      i === 0
                        ? "ring-primary"
                        : "ring-transparent hover:ring-border"
                    } transition-all`}
                  />
                ),
              )}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-border/20 rounded-xl overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                // onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium text-foreground">
                {/* {quantity} */}1
              </span>
              <Button
                variant="ghost"
                size="icon"
                // onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="flex-1 h-12 text-base font-semibold rounded-xl">
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-xl border-border/20"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-xl border-border/20"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/20">
            {[
              { icon: Truck, label: "Free Shipping" },
              { icon: ShieldCheck, label: "2-Year Warranty" },
              { icon: RotateCcw, label: "30-Day Returns" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 text-center"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="details" className="mb-20">
        <TabsList className="bg-card border border-border/20">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent
          value="details"
          className="mt-6 text-muted-foreground leading-relaxed max-w-3xl space-y-4"
        >
          <p>
            Crafted for audiophiles and casual listeners alike, our Premium
            Wireless Headphones deliver unparalleled sound quality with deep
            bass, crisp highs, and rich mids.
          </p>
          <p>
            The advanced active noise cancellation adapts to your environment,
            letting you focus on what matters most — your music, podcasts, or
            calls.
          </p>
        </TabsContent>
        <TabsContent value="specs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {[
              ["Driver Size", "40mm"],
              ["Frequency Response", "20Hz - 40kHz"],
              ["Battery Life", "40 hours"],
              ["Charging", "USB-C Fast Charge"],
              ["Bluetooth", "5.3"],
              ["Weight", "250g"],
            ].map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-3 border-b border-border/10"
              >
                <span className="text-muted-foreground">{key}</span>
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6 text-muted-foreground">
          <p>No reviews yet. Be the first to review this product!</p>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            image={watch}
            name="Luxury Smart Watch"
            price={599}
            originalPrice={799}
          />
          <ProductCard
            image={phone}
            name="Flagship Smartphone"
            price={899}
            originalPrice={1199}
          />
          <ProductCard
            image={headphones}
            name="Studio Monitor Headphones"
            price={399}
          />
        </div>
      </section>
    </main>
  );
}
