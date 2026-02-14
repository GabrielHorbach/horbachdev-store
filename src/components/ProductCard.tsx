import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  originalPrice?: number;
}

const ProductCard = ({
  image,
  name,
  price,
  originalPrice,
}: ProductCardProps) => {
  return (
    <div className="product-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm border border-border/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
