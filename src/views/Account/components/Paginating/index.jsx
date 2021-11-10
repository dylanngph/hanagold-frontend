import React, { useEffect, useState } from "react";
import Pagination from "react-paginating";
import "./style.scss";

const Paginating = (props) => {
  const { listData, perChunk } = props;
  const [pagiData, setPagiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = perChunk;
  const pageCount = listData.length % perChunk === 0 ? listData.length / perChunk : (Math.floor(listData.length / perChunk) + 1);
  const total = listData.length * limit;

  const handlePageChange = (page, e) => {
    setCurrentPage(page);
  };

  const divisionList = (listData, perChunk) => {
    return listData.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
  };

  useEffect(() => {
    setPagiData(divisionList(listData, perChunk));
  }, [listData, perChunk]);

  return (
    <div>
      <div className="listPagination grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
        {pagiData && pagiData.length > 0
          ? pagiData[currentPage - 1].map((item) => <li key={item}>{item}</li>)
          : null}
      </div>
      <Pagination
        total={total}
        limit={limit}
        pageCount={pageCount}
        currentPage={currentPage}
        className="bg-pagination">
        {({
          pages,
          currentPage,
          previousPage,
          nextPage,
          getPageItemProps,
        }) => {
          return (
            <div className="pagination">
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange,
                })}
                disabled={currentPage === 1}
                className="pagination__btnFirst">
                First
              </button>

              {
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange,
                  })}
                  disabled={currentPage === 1}
                  className="pagination__btnNext">
                  <img
                    src={"/icon/ic_prev.png"}
                    className="pagination__img"
                    alt="Cato"
                  />
                </button>
              }

              {pages.map((page) => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "rgba(255, 194, 71)" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: handlePageChange,
                    })}
                    className="pagination__number">
                    {page}
                  </button>
                );
              })}

              {
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange,
                  })}
                  disabled={currentPage === pagiData.length}
                  className="pagination__btnNext">
                  <img
                    src={"/icon/ic_next.png"}
                    className="pagination__img"
                    alt="Cato"
                  />
                </button>
              }

              <button
                {...getPageItemProps({
                  pageValue: pageCount,
                  onPageChange: handlePageChange,
                })}
                className="pagination__btnFirst">
                Last
              </button>
            </div>
          );
        }}
      </Pagination>
    </div>
  );
};

export default Paginating;
