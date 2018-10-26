import React from "react";

export default props =>
  !props.hide && (
    <button className={"btn m-2 btn-" + props.styles} onClick={props.onClick}>
      <i className={"fa fa-" + props.icon} />
    </button>
  );
