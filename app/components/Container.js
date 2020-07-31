import React, { useEffect } from "react";
// reusable container
function Container(props) {
  return (
    <>
      {/* div tag of container includes required classes */}
      {/* to put any code in between two div tags, use props.children that automatically puts any children code in */}
      {/* to make container flexible, use javascript code with ternary operator to apply narrow class if props.wide is false */}
      <div className={"container py-md-5 " + (props.wide ? "" : "container--narrow")}>{props.children}</div>
    </>
  );
}

export default Container;
