import React from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/Icons/Icons";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div className="flex items-center justify-between gap-6">
      <button
        className={` py-1 font-medium cursor-pointer px-4 text-[15px]  flex text-[#4D4D4D] items-center gap-2 rounded-md border-[#D9D9D9] border`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <LeftArrowIcon />
        Previous
      </button>

      <div className="flex gap-5 text-[#4D4D4D] font-normal items-center  ">
        {/* Display page numbers */}

        <button
          className={` text-sm py-2 rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          1
        </button>
        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          ...
        </button>
        <button
          className={` h-8 w-8 bg-[#146EB4] text-white text-sm  rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          10
        </button>
        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          11
        </button>
        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          12
        </button>
        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          13
        </button>
        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          14
        </button>
        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          15
        </button>

        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          16
        </button>

        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          17
        </button>

        <button
          className={` py-2 text-sm rounded-md `}
          // onClick={() => handlePageChange(index + 1)}
        >
          18
        </button>
      </div>

      <button
        className={` py-1 px-4 font-medium cursor-pointer rounded-md text-sm text-[#4D4D4D] flex items-center gap-2 border-[#D9D9D9] border`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default Pagination;
