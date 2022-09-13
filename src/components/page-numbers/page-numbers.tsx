import { useEffect } from "react";
import usePagination from "../../hooks/usePagination";
import {
  PageNumbersContainer,
  PageNumber,
  PageNavigation,
  DotText,
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
  } = usePagination<IMarketData>(10, 2, 5, data);

  useEffect(() => {
    setPaginatedData(currentPageData);
  }, [currentPageData]);

  return (
    <PageNumbersContainer>
      <PageNumber
        selected={currentPage === firstPage}
        onClick={() => jumpToPage(firstPage)}
      >
        {"<<"}
      </PageNumber>
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

      <PageNumber
        selected={currentPage === lastPage}
        onClick={() => jumpToPage(lastPage)}
      >
        {">>"}
      </PageNumber>
    </PageNumbersContainer>
  );
}

export default PageNumbers;
