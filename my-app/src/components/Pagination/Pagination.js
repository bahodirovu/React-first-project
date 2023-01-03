import React from "react";
import { getPageArr } from "../../utils/page";
import Mybutton from "../UI/button/Mybutton";

function Pagination({ totalPage, page, changePage }) {
  const pageArr = getPageArr(totalPage);
  return (
    <>
      {pageArr.map((item) => (
        <Mybutton
          key={item}
          onClick={() => changePage(item)}
          className={
            page === item ? "btn btn-primary" : "btn btn-outline-primary"
          }
        >
          {item}
        </Mybutton>
      ))}
    </>
  );
}
export default Pagination;
