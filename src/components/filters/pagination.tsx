// @/components/filters/pagination.tsx
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
import { useRouter, useSearchParams } from "next/navigation";

interface FilterPaginationProps {
  totalPages: number;
}

export function FilterPagination({ totalPages }: FilterPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(createPageUrl(page), { scroll: false });
  };

  if (totalPages <= 1) return null;

  // Helper to decide what to render
  const renderPages = () => {
    const items = [];

    for (let page = 1; page <= totalPages; page++) {
      // Logic: Always show first, last, and current +/- 1
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
      }
      // Show ellipsis if there's a gap of more than 1 page
      else if (page === currentPage - 2 || page === currentPage + 2) {
        items.push(
          <PaginationItem key={`ellipsis-${page}`}>
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }
    return items;
  };

  return (
    <Pagination>
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
  );
}
