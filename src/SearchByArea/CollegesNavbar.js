import React from "react";
import "./style.css";

function CollegesNavBar(props) {
  return (
    <div class="dropdown">
      <button class="dropbtn">Select a College</button>
      <div class="dropdown-content">
        <a href="#" onClick={() => props.collegeSelected("CRST")}>
          {" "}
          College of Creative Studies
        </a>
        <a href="#" onClick={() => props.collegeSelected("ENGR")}>
          {" "}
          College of Engineering
        </a>
        <a href="#" onClick={() => props.collegeSelected("LNS")}>
          {" "}
          College of Letters and Science
        </a>
      </div>
    </div>
  );
}

function getAreas() {}

export default CollegesNavBar;
