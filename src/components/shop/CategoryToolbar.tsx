"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryToolbarProps {
  pageSize: string;
  onPageSizeChange: (value: string) => void;
}

export default function CategoryToolbar({
  pageSize,
  onPageSizeChange,
}: CategoryToolbarProps) {
  return (
    <div className="flex items-center justify-end gap-4 mb-6">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Show
        </span>
        <Select value={pageSize} onValueChange={onPageSizeChange}>
          <SelectTrigger className="w-20 h-9 border-border/20 bg-card">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="9">9</SelectItem>
            <SelectItem value="12">12</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm text-muted-foreground">per page</span>
      </div>
    </div>
  );
}
