import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden hero-section">
      <div className="absolute inset-0">
        <Image
          src={heroBanner}
          alt="Premium luxury products showcase"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/20" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium
            </span>
            Collection
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg">
            Experience the finest selection of luxury products crafted for those
            who appreciate excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border/20 text-foreground hover:bg-card"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
