import React from "react";
import "../App.css";

class Music extends React.Component {
  render() {
    let menuItem = this.props.menuItem;
    let menuList = ["Don2", "coolie no 1", "sona-sona"];
    let menuElement = [];

    for (let m = 0; m < menuList.length; m++) {
      menuElement.push(
        m === menuItem ? (
          <li className="list-items active" key={"song" + menuList[m]}>
            <span>{menuList[m]}</span>{" "}
            <span>
              <img
                style={styling.icons}
                src="https://www.flaticon.com/svg/static/icons/svg/3039/3039386.svg"
                alt=">"
              />
            </span>
          </li>
        ) : (
          <li className="list-items" key={"song" + menuList[m]}>
            <span>{menuList[m]}</span>{" "}
            <span>
              <img
                style={styling.icons}
                src="https://www.flaticon.com/svg/static/icons/svg/3039/3039386.svg"
                alt=">"
              />
            </span>
          </li>
        )
      );
    }

    return (
      <ul id="MusicList" className="list">
        {menuElement}
      </ul>
    );
  }
}

let styling = {
  icons: {
    width: 15
  }
};

export default Music;
