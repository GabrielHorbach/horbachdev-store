"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

interface CategoryFiltersProps {
  availableColors: string[];
  colorSwatches: Record<string, string>;
  selectedColors: string[];
  onColorToggle: (color: string) => void;
  priceRange: [number, number];
  onPriceChange: (value: number[]) => void;
  onClear: () => void;
  showFilters: boolean;
  activeFilterCount: number;
}

export default function CategoryFilters({
  availableColors,
  colorSwatches,
  selectedColors,
  onColorToggle,
  priceRange,
  onPriceChange,
  onClear,
  showFilters,
  activeFilterCount,
}: CategoryFiltersProps) {
  return (
    <aside
        className={`w-64 shrink-0 space-y-8 ${
          showFilters ? "block" : "hidden"
        } lg:block`}
      >
        <div className="product-card space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground text-lg">Filters</h3>
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClear}
                className="text-xs text-muted-foreground hover:text-foreground gap-1 h-auto p-1"
              >
                <X className="h-3 w-3" />
                Clear all
              </Button>
            )}
          </div>

          {/* Color Filter */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Color</h4>
            <div className="space-y-2">
              {availableColors.map((color) => (
                <label
                  key={color}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => onColorToggle(color)}
                  />
                  <span
                    className={`w-4 h-4 rounded-full ${colorSwatches[color]}`}
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {color}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">
              Price Range
            </h4>
            <Slider
              min={0}
              max={1200}
              step={50}
              value={priceRange}
              onValueChange={onPriceChange}
              className="py-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </aside>
  );
}
