import React, { useState, useEffect } from "react";
import Cards from "../components/cards/Cards";
import InputGroup from "../components/filters/Category/InputGroup";

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Episode:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
      </div>
      <div className="row mb-4">
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup total={51}/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
