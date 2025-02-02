import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, gender, image, location, status } = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={styles.cards}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6 fw-bold mb-3">{`Gender: ${gender}`}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Character Found";
  }
  return <>{display}</>;
};

export default Cards;
