import React from "react";

function SubTitle({ title, btnTitle }) {
  return (
    <div className="d-flex justify-content-between pt-4 my-3">
      <div className="sub-title">{title}</div>
      {btnTitle ? <button className="shopping-now">{btnTitle}</button> : null}
    </div>
  );
}

export default SubTitle;
