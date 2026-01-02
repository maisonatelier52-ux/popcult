interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-10 w-full">
      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center cursor-pointer text-sm font-medium
              ${
                page === currentPage
                  ? "bg-[#000080] text-white"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next Arrow */}
      <button
        onClick={() =>
          currentPage < totalPages &&
          onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="text-gray-500 hover:text-black disabled:opacity-40"
      >
        →
      </button>
    </div>
  );
}
