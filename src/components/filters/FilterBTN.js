import React from "react";

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          input[type="radio"] {
            display: none;
          }

          .form-check-input:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={()=>{
            setPageNumber(1);
            task(items);
          }}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
