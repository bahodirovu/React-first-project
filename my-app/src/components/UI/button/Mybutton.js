import React from "react";

function Mybutton({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
export default Mybutton;
