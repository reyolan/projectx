import { useEffect } from "react";
import usePagination from "../../hooks/usePagination";

import {
  PageNumbersContainer,
  PageNumber,
  PageNavigation,
} from "./page-numbers.styles";
import { IMarketData } from "../../types";

interface IPageNumbersProps {
  data: IMarketData[];
  setPaginatedData: React.Dispatch<React.SetStateAction<IMarketData[]>>;
}

function PageNumbers({ data, setPaginatedData }: IPageNumbersProps) {
  const {
    currentPageData,
    firstPage,
    lastPage,
    nextPage,
    prevPage,
    jumpToPage,
    pageRange,
    currentPage,
  } = usePagination<IMarketData>(10, 1, 3, data);

  useEffect(() => {
    setPaginatedData(currentPageData);
  }, [currentPageData]);

  return (
    <PageNumbersContainer>
      <PageNavigation
        disabled={currentPage === firstPage}
        onClick={() => jumpToPage(firstPage)}
      >
        {"<<"}
      </PageNavigation>

      <PageNavigation disabled={currentPage === firstPage} onClick={prevPage}>
        {"<"}
      </PageNavigation>

      {pageRange.map(
        (pageNumber, i): React.ReactNode => (
          <PageNumber
            key={i}
            selected={currentPage === pageNumber}
            onClick={() => {
              jumpToPage(pageNumber);
            }}
          >
            {pageNumber}
          </PageNumber>
        )
      )}

      <PageNavigation disabled={currentPage === lastPage} onClick={nextPage}>
        {">"}
      </PageNavigation>

      <PageNavigation
        disabled={currentPage === lastPage}
        onClick={() => jumpToPage(lastPage)}
      >
        {">>"}
      </PageNavigation>
    </PageNumbersContainer>
  );
}

export default PageNumbers;
