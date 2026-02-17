"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal } from "lucide-react";

interface CategoryFilterToggleProps {
  onClick: () => void;
  activeFilterCount: number;
}

export default function CategoryFilterToggle({
  onClick,
  activeFilterCount,
}: CategoryFilterToggleProps) {
  return (
    <Button
      variant="outline"
      className="border-border/20 gap-2 lg:hidden"
      onClick={onClick}
    >
      <SlidersHorizontal className="h-4 w-4" />
      Filters
      {activeFilterCount > 0 && (
        <Badge className="h-5 w-5 p-0 justify-center text-[10px]">
          {activeFilterCount}
        </Badge>
      )}
    </Button>
  );
}
