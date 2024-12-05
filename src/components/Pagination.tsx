import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName="pagination"
      activeClassName="active"
      className='pagination flex flex-row gap-4 justify-center p-10'
    />
  );
};

export default Pagination;
