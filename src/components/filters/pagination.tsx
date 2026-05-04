"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

interface FilterPaginationProps {
  totalPages: number;
}

export function FilterPagination({ totalPages }: FilterPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentLimit = searchParams.get("limit") ?? "10"; // Default matching your schema

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleLimitChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", value);
    params.set("page", "1"); // Reset to page 1 on limit change
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const renderPages = () => {
    const items = [];
    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1)
      ) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (page === currentPage - 2 || page === currentPage + 2) {
        const isLeftEllipsis = page < currentPage;
        const startGap = isLeftEllipsis ? 2 : currentPage + 2;
        const endGap = isLeftEllipsis ? currentPage - 2 : totalPages - 1;

        const hiddenPages = [];
        for (let i = startGap; i <= endGap; i++) {
          hiddenPages.push(i);
        }

        items.push(
          <PaginationItem key={`ellipsis-${page}`}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-md border border-transparent hover:border-input hover:bg-accent transition-colors">
                <PaginationEllipsis className="h-4 w-4" />
                <span className="sr-only">Select page</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={isLeftEllipsis ? "start" : "end"}
                className="max-h-60 overflow-y-auto"
              >
                {hiddenPages.map((p) => (
                  <DropdownMenuItem
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className="cursor-pointer justify-center font-medium"
                  >
                    Page {p}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </PaginationItem>,
        );
      }
    }
    return items;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      {/* Items Per Page Selector */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
        <span>Show</span>
        <Select value={currentLimit} onValueChange={handleLimitChange}>
          <SelectTrigger className="w-17.5 h-8">
            <SelectValue placeholder={currentLimit} />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 15, 20, 30, 40].map((v) => (
              <SelectItem key={v} value={v.toString()}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span>per page</span>
      </div>

      {/* Pagination Controls */}
      <Pagination className="justify-end w-auto mx-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage <= 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext
              className={
                currentPage >= totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
