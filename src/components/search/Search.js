import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
        pattern="^\S+$"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        type="submit"
        className={`btn btn-primary fs-5 ${styles.btn}`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
