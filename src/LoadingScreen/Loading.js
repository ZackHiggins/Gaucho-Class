import React from "react";
import "./style.css";
import mapache from "./Logos/mapache.png";

function Loading() {
  let style = {};

  return (
    <div className="background">
      <h1 className="center">Loading ...</h1>
      <div className="loader">
        <img src={mapache} alt="no img" style={{ width: 100, height: 105 }} />
      </div>{" "}
    </div>
  );
}

export default Loading;
