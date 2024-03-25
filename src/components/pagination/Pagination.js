import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      className="pagination justify-content-center gap-4 my-4"
      previousLabel="Prev"
      nextLabel="Next"
      previousclassName="btn btn-primary"
      nextclassName="btn btn-primary"
      pageclassName="page-item"
      pageLinkclassName="page-link"
      activeclassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
