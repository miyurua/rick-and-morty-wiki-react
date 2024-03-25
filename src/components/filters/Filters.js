import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setGender, setSpecies, setStatus, setPageNumber }) => {
  let clear = () => {
    setGender("");
    setSpecies("");
    setStatus("");
    setPageNumber("");
    window.location.reload(false);
  };

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary mb-4"
      >
        Clear
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default Filters;
