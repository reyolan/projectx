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
  } = usePagination<IMarketData>(10, 1, 5, data);

  useEffect(() => {
    setPaginatedData(currentPageData);
  }, [currentPageData]);

  return (
    <PageNumbersContainer>
      <PageNavigation disabled={currentPage === firstPage} onClick={prevPage}>
        {"<"}
      </PageNavigation>

      <PageNumber
        selected={currentPage === firstPage}
        onClick={() => jumpToPage(firstPage)}
      >
        {firstPage}
      </PageNumber>

      {firstPage + 1 !== pageRange[0] && <DotText>...</DotText>}

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

      {lastPage - 1 !== pageRange.at(-1) && <DotText>...</DotText>}

      <PageNumber
        selected={currentPage === lastPage}
        onClick={() => jumpToPage(lastPage)}
      >
        {lastPage}
      </PageNumber>

      <PageNavigation disabled={currentPage === lastPage} onClick={nextPage}>
        {">"}
      </PageNavigation>
    </PageNumbersContainer>
  );
}

export default PageNumbers;
