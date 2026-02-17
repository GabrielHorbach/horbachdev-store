"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryFilters from "./CategoryFilters";
import CategoryFilterToggle from "./CategoryFilterToggle";
import CategoryToolbar from "./CategoryToolbar";
import CategoryPagination from "./CategoryPagination";
import type { StaticImageData } from "next/image";

export interface ShopProduct {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
  originalPrice?: number;
  color: string;
}

interface CategoryShopProps {
  products: ShopProduct[];
  categoryName: string;
  availableColors: string[];
  colorSwatches: Record<string, string>;
}

export default function CategoryShop({
  products,
  categoryName,
  availableColors,
  colorSwatches,
}: CategoryShopProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState("6");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1200]);
  const [showFilters, setShowFilters] = useState(true);

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
    setCurrentPage(1);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedColors([]);
    setPriceRange([0, 1200]);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(p.color);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return colorMatch && priceMatch;
    });
  }, [products, selectedColors, priceRange]);

  const size = parseInt(pageSize);
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / size));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * size,
    safePage * size,
  );

  const activeFilterCount =
    selectedColors.length + (priceRange[0] > 0 || priceRange[1] < 1200 ? 1 : 0);

  return (
    <>
      {/* Page Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {categoryName}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <CategoryFilterToggle
          onClick={() => setShowFilters(!showFilters)}
          activeFilterCount={activeFilterCount}
        />
      </div>

      <div className="flex gap-8">
        <CategoryFilters
          availableColors={availableColors}
          colorSwatches={colorSwatches}
          selectedColors={selectedColors}
          onColorToggle={toggleColor}
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
          onClear={clearFilters}
          showFilters={showFilters}
          activeFilterCount={activeFilterCount}
        />

        {/* Product Grid + Pagination */}
        <div className="flex-1 min-w-0">
          <CategoryToolbar
            pageSize={pageSize}
            onPageSizeChange={(v) => {
              setPageSize(v);
              setCurrentPage(1);
            }}
          />

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
              ))}
            </div>
          ) : (
            <div className="product-card text-center py-16">
              <p className="text-muted-foreground text-lg mb-2">
                No products match your filters
              </p>
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-primary"
              >
                Clear all filters
              </Button>
            </div>
          )}

          <CategoryPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          <p className="text-center text-sm text-muted-foreground mt-4">
            Showing {(safePage - 1) * size + 1}–
            {Math.min(safePage * size, filteredProducts.length)} of{" "}
            {filteredProducts.length} products
          </p>
        </div>
      </div>
    </>
  );
}
