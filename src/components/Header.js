import React from "react";
import "../App.css";
import "../lockHeader.css";

//*********Header show date, time and battery *******

function Header() {
  let currentDate = new Date();
  let d = currentDate.toDateString();
  let t = currentDate.getHours() + ":" + currentDate.getMinutes();

  return (
    <div className="header-cont">
      <time>{t}</time>
      <span>{d}</span>
      <img
        id="battery-img"
        src="https://www.flaticon.com/svg/static/icons/svg/3103/3103460.svg"
        alt="battery"
      ></img>
    </div>
  );
}

export default Header;
