import React from "react";
import "../App.css";

class MenuScreen extends React.Component {
  // the sliding/rotating gesture to go through the options will be triggered dynamically
  componentDidMount() {
    this.props.pickMenu(this.props.changeMenu_State);
  }

  render() {
    // rendering the menu list dynamically
    let menuItem = this.props.menuItem;
    let menuList = ["Cover Flow", "Music", "Games", "Settings"];
    let icon = [
      "https://www.flaticon.com/svg/static/icons/svg/2404/2404718.svg",
      "https://www.flaticon.com/svg/static/icons/svg/727/727218.svg",
      "https://www.flaticon.com/svg/static/icons/svg/13/13973.svg",
      "https://www.flaticon.com/svg/static/icons/svg/1242/1242392.svg"
    ];
    let menuElement = [];

    for (let m = 0; m < menuList.length; m++) {
      menuElement.push(
        m === menuItem ? (
          <li className="list-items active" key={"menu" + menuList[m]}>
            <span>{menuList[m]}</span>{" "}
            <span>
              <img style={styling.icons} src={icon[m]} alt=">" />
            </span>
          </li>
        ) : (
          <li className="list-items" key={"menu" + menuList[m]}>
            <span>{menuList[m]}</span>{" "}
            <span>
              <img style={styling.icons} src={icon[m]} alt=">" />
            </span>
          </li>
        )
      );
    }

    return (
      <ul id="menuList" className="list">
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

export default MenuScreen;
