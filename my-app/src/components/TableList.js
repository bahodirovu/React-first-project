import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TableItem from "../components/TableItem";

const TableList = ({ post, title, remove }) => {
  if (!post.length) {
    return <h5 className="text-center my-3">No Found</h5>;
  }
  return (
    <>
      <h3 className="text-center">{title}</h3>
      <TransitionGroup>
        {post.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="item">
            <TableItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
export default TableList;
