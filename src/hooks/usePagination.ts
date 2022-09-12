import { useState, useEffect, useMemo, useCallback } from "react";
import { range } from "../utils/helpers";

const FIRST_PAGE = 1;

function usePagination<T>(
  itemsPerPage: number,
  pageNumbersToShowCount: number = 1,
  initialPageSize: number
) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataToPaginate, setDataToPaginate] = useState<T[]>([]);
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [pageRange, setPageRange] = useState<number[]>(
    range(FIRST_PAGE + 1, initialPageSize)
  );

  const lastPage = Math.ceil(dataToPaginate.length / itemsPerPage);

  useEffect(() => {
    const getCurrentPageData = () => {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;

      setCurrentPageData(dataToPaginate.slice(begin, end));
    };

    getCurrentPageData();
  }, [currentPage, dataToPaginate]);

  const updateRangeToShowOnJump = () => {};

  const nextPage = useCallback(() => {
    setCurrentPage(currentPage => currentPage + 1);

    // update page range
    const pageToChangeRange = initialPageSize - 1; // 4
    const anotherPageToChangeRange = lastPage - initialPageSize; //6
    if (
      currentPage >= pageToChangeRange &&
      currentPage <= anotherPageToChangeRange
    ) {
      setPageRange(
        range(currentPage, currentPage + pageNumbersToShowCount + 1)
      );
    }

    if (currentPage === anotherPageToChangeRange + 1) {
      setPageRange(range(currentPage, currentPage + initialPageSize - 2));
    }
  }, [currentPage]);

  const prevPage = useCallback(() => {
    setCurrentPage(currentPage => currentPage - 1);

    const pageToChangeRange = initialPageSize - 1; // 4
    const anotherPageToChangeRange = lastPage - initialPageSize; //6

    // update page range
    if (
      currentPage > pageToChangeRange &&
      currentPage < anotherPageToChangeRange + initialPageSize
    ) {
      setPageRange(
        range(currentPage - pageNumbersToShowCount - 1, currentPage)
      );
    }

    if (currentPage === pageToChangeRange + 1) {
      setPageRange(range(FIRST_PAGE + 1, currentPage));
    }
  }, [currentPage]);

  const jumpToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    nextPage,
    prevPage,
    jumpToPage,
    currentPageData,
    currentPage,
    firstPage: FIRST_PAGE,
    lastPage,
    pageRange,
    setDataToPaginate,
  };

  // hide next button if last page
  // hide prev button if first page (via styled component props)
}

export default usePagination;
