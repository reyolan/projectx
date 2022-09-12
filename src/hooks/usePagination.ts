import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { range } from "../utils/helpers";

const FIRST_PAGE = 1;

function usePagination<T>(
  itemsPerPage: number,
  pageNumbersToShowCount: number = 1,
  initialPageSize: number,
  dataToPaginate: T[]
) {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [pageRange, setPageRange] = useState<number[]>(
    range(FIRST_PAGE + 1, initialPageSize)
  );

  const currentPageRef = useRef(FIRST_PAGE);

  const lastPage = useMemo(
    () => Math.ceil(dataToPaginate.length / itemsPerPage),
    []
  );

  useEffect(() => {
    const getCurrentPageData = () => {
      const begin = (currentPageRef.current - 1) * itemsPerPage;
      const end = begin + itemsPerPage;

      setCurrentPageData(dataToPaginate.slice(begin, end));
    };

    getCurrentPageData();
  }, [currentPage]);

  const nextPage = useCallback(() => {
    currentPageRef.current += 1;
    setCurrentPage(currentPage => currentPage + 1);

    // update page range
    const pageToChangeRange = initialPageSize - 1; // 4
    const anotherPageToChangeRange = lastPage - initialPageSize + 1; //6
    if (
      currentPageRef.current > pageToChangeRange &&
      currentPageRef.current <= anotherPageToChangeRange
    ) {
      setPageRange(
        range(
          currentPageRef.current - 1,
          currentPageRef.current + pageNumbersToShowCount
        )
      );
    }

    if (currentPageRef.current === anotherPageToChangeRange + 1) {
      setPageRange(
        range(
          currentPageRef.current - 1,
          currentPageRef.current + initialPageSize - 3
        )
      );
    }
  }, []);

  const prevPage = useCallback(() => {
    currentPageRef.current -= 1;
    setCurrentPage(currentPage => currentPage - 1);

    const pageToChangeRange = initialPageSize - 1; // 4
    const anotherPageToChangeRange = lastPage - initialPageSize; //6

    // update page range
    if (
      currentPageRef.current >= pageToChangeRange &&
      currentPageRef.current < anotherPageToChangeRange + initialPageSize
    ) {
      setPageRange(
        range(
          currentPageRef.current - pageNumbersToShowCount,
          currentPageRef.current + 1
        )
      );
    }

    if (currentPageRef.current === pageToChangeRange) {
      setPageRange(range(FIRST_PAGE + 1, currentPageRef.current + 1));
    }
  }, []);

  const jumpToPage = useCallback((pageNumber: number) => {
    currentPageRef.current = pageNumber;
    setCurrentPage(pageNumber);

    const anotherPageToChangeRange = lastPage - initialPageSize; //6

    if (currentPageRef.current < initialPageSize) {
      setPageRange(range(FIRST_PAGE + 1, initialPageSize));
    } else if (currentPageRef.current > anotherPageToChangeRange + 1) {
      setPageRange(range(lastPage - initialPageSize + 1, lastPage - 1));
    } else {
      setPageRange(
        range(
          currentPageRef.current - 1,
          currentPageRef.current + pageNumbersToShowCount
        )
      );
    }
  }, []);

  return {
    nextPage,
    prevPage,
    jumpToPage,
    currentPageData,
    currentPage,
    firstPage: FIRST_PAGE,
    lastPage,
    pageRange,
  };
}

export default usePagination;
