import React from "react";
import Mybutton from "./UI/button/Mybutton";

const TableItem = (props) => {
  return (
    <div className="border  my-2 p-3 d-flex justify-content-between align-items-center">
      <div>
        <span>
          {props.post.id}.<b> {props.post.title}</b>
        </span>
        <p>{props.post.body}</p>
      </div>
      <p>
        <Mybutton
          className="btn btn-outline-danger m-2"
          onClick={() => props.remove(props.post)}
        >
          Delete
        </Mybutton>
      </p>
    </div>
  );
};

export default TableItem;
