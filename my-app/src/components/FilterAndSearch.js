import React from "react";
import MyInput from "./UI/input/MyInput";
import Myselect from "./UI/select/Myselect";

function FilterAndSearch({ filter, setFilter }) {
  return (
    <div className="d-flex  justify-content-between my-2">
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        className="form-control"
      />
      <Myselect
        value={filter.sort}
        onChange={(selected) => setFilter({ ...filter, sort: selected })}
        defaultValue="Sorted by"
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Body" },
        ]}
      />
    </div>
  );
}
export default FilterAndSearch;
