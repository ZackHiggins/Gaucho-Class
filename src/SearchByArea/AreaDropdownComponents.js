import React from "react";

function AreaDropdownComponent(props) {
  return (
    <a href="#" onClick={() => props.areaSelected(props.text)}>
      {" "}
      {props.text}
    </a>
  );
}

export default AreaDropdownComponent;
