import React from "react";
import "./style.css";
import mapache from "./Logos/mapache.png";

function Loading() {
  let style = {};

  return (
    <div className="background">
      <h1 className="center">Loading ...</h1>
      <div className="loader">
        <img src={mapache} style={{ width: 50, height: 50 }} />
      </div>{" "}
    </div>
  );
}

export default Loading;
