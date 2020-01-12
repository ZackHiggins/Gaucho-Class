import React from "react";
import AreaDropdownComponent from "./AreaDropdownComponents";

function AreasNavbar(props) {
  let areaComponents = props.possibleAreas.map(a => {
    return <AreaDropdownComponent text={a} areaSelected={props.areaSelected} />;
  });

  return (
    <div class="dropdown">
      <button class="dropbtn">Select a Area</button>
      <div class="dropdown-content">{areaComponents}</div>
    </div>
  );
}

export default AreasNavbar;
