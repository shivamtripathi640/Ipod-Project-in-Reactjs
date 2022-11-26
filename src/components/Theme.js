import React from "react";
import "../App.css";

class Theme extends React.Component {
  componentDidMount() {
    this.props.changeTheme(
      this.props.screen,
      this.props.menu,
      this.props.menuItem
    );
  }

  componentDidUpdate() {
    this.props.changeTheme(
      this.props.screen,
      this.props.menu,
      this.props.menuItem
    );
  }

  render() {
    let menuItem = this.props.menuItem;
    let menuList = ["Dark", "Classic"];
    let menuElement = [];

    for (let m = 0; m < menuList.length; m++) {
      menuElement.push(
        m === menuItem ? (
          <li
            className="list-items active"
            style={styling.listItem}
            key={"theme" + menuList[m]}
          >
            {menuList[m]}
          </li>
        ) : (
          <li
            className="list-items"
            style={styling.listItem}
            key={"theme" + menuList[m]}
          >
            {menuList[m]}
          </li>
        )
      );
    }

    return (
      <ul id="MusicList" className="list" style={styling.list}>
        {menuElement}
      </ul>
    );
  }
}

// ***************style************************

let styling = {
  list: {
    margin: 0
  },
  listItem: {
    justifyContent: "center"
  }
};

export default Theme;
