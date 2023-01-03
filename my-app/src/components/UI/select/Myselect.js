import React from "react";

function Myselect({ options, defaultValue, onChange, value }) {
  return (
    <select
      className="form-select w-50"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}
export default Myselect;
