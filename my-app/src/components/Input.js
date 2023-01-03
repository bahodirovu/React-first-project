import React, { useState } from "react";
export default function Input() {
  const [value, setValue] = useState("");

  return (
    <>
      <p>Value:{value}</p>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
