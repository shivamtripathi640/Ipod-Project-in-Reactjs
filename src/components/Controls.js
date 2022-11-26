import React from "react";
import ZingTouch from "zingtouch";
import "../App.css";

class Controls extends React.Component {
  componentDidMount() {
    const exitMenu = this.props.exitMenu;

    // getting buttons element by id
    const backButton = document.getElementById("menu-btn");

    // defining active region for buttons
    const activeMenuButton = ZingTouch.Region(backButton);

    // exit menu or lock device whenever Menu button is pressed
    activeMenuButton.bind(backButton, "tap", function (event) {
      return exitMenu();
    });
  }

  render() {
    const screen = this.props.screenLock;
    //the wheel div comprises of the outer buttuns of the controller
    return (
      <section id="control" style={styling.controlSection}>
        <div id="wheel" style={styling.container}>
          {/* menu button acting as back button */}
          <div id="menu-btn" style={styling.menuBtn}>
            Menu
          </div>
          {/* prev button to select previous track */}
          <div id="prev-btn" style={styling.backArrow}>
            <i className="fas fa-backward"></i>
          </div>
          {/* next button to select next track */}
          <div id="next-btn" style={styling.forwardArrow}>
            <i className="fas fa-forward"></i>
          </div>
          {/* play/pause the song */}
          <div id="play-btn" style={styling.play_pause}>
            <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
          </div>
        </div>
        {/* Select button */}
        <div
          id="okay-btn"
          style={styling.selectBtn}
          onClick={() => {
            if (this.props.lock === true) return this.props.onUnlock();
            else if (screen >= 1) return this.props.enterMenu();
          }}
        ></div>
      </section>
    );
  }
}

// ***************style************************

let styling = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "1fr 1fr 1fr",
    height: 150,
    width: 150,
    background: "ivory",
    alignItems: "center",
    borderRadius: "50%",
    margin: "20px auto",
    color: "#9E9E9E"
  },
  menuBtn: {
    gridRow: "1/2",
    gridColumn: "1/4",
    fontWeight: 900
  },
  backArrow: {
    gridRow: "2/3",
    gridColumn: "1/2"
  },
  forwardArrow: {
    gridRow: "2/3",
    gridColumn: "3/4"
  },
  play_pause: {
    gridRow: "3/4",
    gridColumn: "1/4",
    fontSize: 12
  },
  selectBtn: {
    borderRadius: "50%",
    background: "silver",
    width: 60,
    height: 60,
    position: "absolute",
    boxShadow: "0 0 4px 0px black"
  },
  controlSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Controls;
