import { useState } from "react";
import ButtonCmp from "./ButtonCmp";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const rangeLimit = 5;
  const [visibleRange, setVisibleRange] = useState([2, rangeLimit]);

  const onVisibleRangeHandle = (start, end) => {
    end < totalPages && setVisibleRange([start, end]);
  };

  const incrementPageCount = () => {
    if (currentPage < totalPages) {
      onSelectCurrentPage(currentPage + 1)
    }
  };

  const decreamentPageCount = () => {
    if (currentPage > 1) {
      onSelectCurrentPage(currentPage - 1)
    }
  };

  const onSelectCurrentPage = (current) => {
    if (current > 4 || current === totalPages - 3) {
      onVisibleRangeHandle(current - 2, current + 2);
    } else {
      onVisibleRangeHandle(2, rangeLimit);
    }
    onPageChange(current);
  };

  const getPageNumbers = () => {
    return [...Array(rangeLimit).keys()].map((i) => visibleRange[0] + i);
  };

  return (
    <div class="table__pagination">
      <ButtonCmp
        text="Previous"
        cb={() => decreamentPageCount()}
        className="prev"
      />
      <ButtonCmp
        text="1"
        cb={() => onSelectCurrentPage(1)}
        className={currentPage === 1 ?  "page--active" : "page--default"}
      />
      {currentPage > 4 && <div class="dash">...</div>}
      {getPageNumbers().map((page) => (
        <ButtonCmp
          text={page}
          cb={() => onSelectCurrentPage(page)}
          className={currentPage === page?  "page--active" : "page--default"}
        />
      ))}
      {currentPage < totalPages - 3 && <div class="dash">...</div>}
      <ButtonCmp
        text={totalPages}
        cb={() => onSelectCurrentPage(totalPages)}
        className={currentPage === totalPages ?  "page--active" : "page--default"}
      />
      <ButtonCmp text="Next" cb={() => incrementPageCount()} className="next" />
    </div>
  );
};

export default Pagination;
