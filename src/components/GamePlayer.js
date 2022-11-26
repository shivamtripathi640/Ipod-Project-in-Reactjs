import React from "react";
import "../App.css";

class GamePlayer extends React.Component {
  render() {
    const game = [bubble, candy];
    const gameId = this.props.menuItem;

    return (
      <div style={styling.imageCont}>
        <img src={game[gameId]} alt="Game" style={styling.image} />
      </div>
    );
  }
}

// ***************style************************

const styling = {
  imageCont: {
    width: "inherit",
    maxHeight: 280
  },
  image: {
    width: "100%",
    height: 280
  }
};

export default GamePlayer;
