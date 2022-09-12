import { useEffect } from "react";
import usePagination from "../../hooks/usePagination";
import { PageNumbersContainer, PageNumber } from "./page-numbers.styles";
import { IMarketData } from "../../types";

interface IPageNumbersProps {
  data: IMarketData[];
  setPaginatedData: React.Dispatch<React.SetStateAction<IMarketData[]>>;
}

function PageNumbers({ data, setPaginatedData }: IPageNumbersProps) {
  const {
    setDataToPaginate,
    currentPageData,
    firstPage,
    lastPage,
    nextPage,
    prevPage,
    pageRange,
    currentPage,
  } = usePagination<IMarketData>(10, 1, 5);

  useEffect(() => setDataToPaginate(data), []);

  useEffect(() => {
    setPaginatedData(currentPageData);
  }, [currentPageData]);

  return (
    <PageNumbersContainer>
      {currentPage > 1 && <div onClick={prevPage}>Previous</div>}
      {currentPage < lastPage && <div onClick={nextPage}>Next</div>}
      <PageNumber selected={currentPage === firstPage}>{firstPage}</PageNumber>
      {firstPage + 1 !== pageRange[0] && <p>...</p>}
      {pageRange.map(
        (pageNumber, i): React.ReactNode => (
          <PageNumber key={i} selected={currentPage === pageNumber}>
            {pageNumber}
          </PageNumber>
        )
      )}
      {lastPage - 1 !== pageRange.at(-1) && <p>...</p>}
      <PageNumber selected={currentPage === lastPage}>{lastPage}</PageNumber>
    </PageNumbersContainer>
  );
}

export default PageNumbers;
