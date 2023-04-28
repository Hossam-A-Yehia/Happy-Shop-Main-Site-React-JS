import ReactPaginate from "react-paginate";
function Pagination({ setPage , dataLength, limit }) {

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={dataLength /limit}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-4"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link text-danger"}
        activeClassName={"active "}
      />
    </div>
  );
}

export default Pagination;
