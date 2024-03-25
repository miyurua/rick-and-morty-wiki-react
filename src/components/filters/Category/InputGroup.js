import React from "react";

const InputGroup = ({ total }) => {
  console.log();
  return (
    <div className="input-group mb-3">
      <select className="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>

        {[
          ...Array(total).keys((x) => {
            return <option value={x + 1}> {x + 1}</option>;
          }),
        ]}
      </select>
    </div>
  );
};

export default InputGroup;
