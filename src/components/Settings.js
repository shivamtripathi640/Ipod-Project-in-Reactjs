import React from "react";
import "../App.css";

class Settings extends React.Component {
  render() {
    let menuItem = this.props.menuItem;
    let menuList = ["Themes", "Wallpaper"];
    let menuElement = [];

    for (let m = 0; m < menuList.length; m++) {
      menuElement.push(
        m === menuItem ? (
          <li className="list-items active" key={"setting" + menuList[m]}>
            <span>{menuList[m]}</span>{" "}
            <span>
              <img
                style={styling.icons}
                src="https://www.flaticon.com/svg/static/icons/svg/945/945147.svg"
                alt=">"
              />
            </span>
          </li>
        ) : (
          <li className="list-items" key={"setting" + menuList[m]}>
            <span>{menuList[m]}</span>{" "}
            <span>
              <img
                style={styling.icons}
                src="https://www.flaticon.com/svg/static/icons/svg/945/945147.svg"
                alt=">"
              />
            </span>
          </li>
        )
      );
    }

    return (
      <ul id="settingsList" className="list">
        {menuElement}
      </ul>
    );
  }
}

// ***************style************************

let styling = {
  icons: {
    width: 15
  }
};

export default Settings;
