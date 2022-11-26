import React from "react";
import "../App.css";
import cover1 from "../assets/images/cover1.jpeg";
import cover2 from "../assets/images/cover2.jpg";
import cover3 from "../assets/images/cover3.jpg";
import cover4 from "../assets/images/cover4.jpg";

class Cover extends React.Component {
  render() {
    const cover = [cover1, cover2, cover3, cover4];
    const list = ["cover 1", "cover 2", "cover 3", "cover 4"];
    const coverId = this.props.menuItem;

    return (
      <div style={styling.imageCont}>
        <img src={cover[coverId]} alt="Cover1" style={styling.image} />
        <div style={styling.text}>{list[coverId]}</div>
      </div>
    );
  }
}

// ***************style************************

const styling = {
  imageCont: {
    width: "inherit",
    maxHeight: 300
  },
  image: {
    width: "100%",
    height: 280
  },
  text: {
    textTransform: "UpperCase",
    margin: "auto",
    color: "white",
    marginTop: -200,
    fontWeight: 900,
    fontStyle: "italic",
    fontSize: "2em"
  }
};

export default Cover;
