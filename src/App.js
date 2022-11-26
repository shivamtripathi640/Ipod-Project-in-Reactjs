import React from "react";
import "./App.css";
import Screen from "./components/Screen";
import Controls from "./components/Controls";
import ZingTouch from "zingtouch";
// importing wallpapers
import wallpaper1 from "./assets/images/wallpaper2.jpg";
import wallpaper2 from "./assets/images/wallpaper1.jpg";
import wallpaper3 from "./assets/images/wallpaper3.jpg";
import wallpaper4 from "./assets/images/wallpaper4.jpg";
import wallpaper5 from "./assets/images/wallpaper5.jpg";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      locked: true,
      screen: 0,
      menu: 0,
      menuItem: 0,
      options: 0
    };

    this.changeMenu = this.changeMenu.bind(this);

    this.angle = 0;
  }

  //function for unlocking the ipod if select-btn is pressed on lock screen
  unlocking = () => {
    if (this.state.locked === true) {
      this.setState({
        locked: false,
        screen: this.state.screen + 1
      });
    }
  };

  // change menu item list
  // the function will be called from child components
  changeMenu = (item) => {
    if (
      this.state.screen < 3 ||
      (this.state.screen === 3 && this.state.menu === 3)
    ) {
      this.setState({
        menuItem: item
      });
    }
  };

  // function to change state of selected menu item in Music Player Component
  changeMenuStateMusic = (item) => {
    if (this.state.screen === 3 && this.state.menu === 1) {
      this.setState({
        menuItem: item
      });
    }
  };

  // function to go into sub-menus
  inMenu = () => {
    if (this.state.screen < 3) {
      this.setState({
        screen: this.state.screen + 1
      });
    }
    if (this.state.screen === 1) {
      this.setState({
        menu: this.state.menuItem,
        menuItem: 0
      });
    }
    if (this.state.screen === 2 && this.state.menu === 3) {
      this.setState({
        options: this.state.menuItem
      });
    }
  };

  // function to come back from sub-menus
  backMenu = () => {
    // for unlocking screen
    if (this.state.locked === false && this.state.screen === 1) {
      this.setState({
        locked: true,
        screen: this.state.screen - 1
      });
    }
    // for exiting current menu
    if (this.state.screen > 0) {
      this.setState({
        screen: this.state.screen - 1,
        menuItem: 0
      });
    }
    if (this.state.screen > 0 && this.state.screen <= 1) {
      this.setState({
        menu: 0
      });
    }
  };

  //function to move over the menu items by Rotation gesture
  move = (changeMenu_State) => {
    const containerElement = document.getElementById("wheel");
    const activeRegion = ZingTouch.Region(containerElement);
    const childElement = document.getElementById("wheel");

    let list_item = document.getElementsByClassName("list-items");
    const len = list_item.length;
    let i = 0;
    let j = len;

    activeRegion.bind(childElement, "rotate", function (event) {
      //Perform Operations
      // console.log(event.detail);
      if (event.detail.distanceFromOrigin === 0) {
        this.angle = event.detail.angle;
      }

      // rotation function for clockwise direction
      if (Math.abs(this.angle - event.detail.angle) > 15) {
        this.angle = Math.abs(event.detail.angle);
        if (event.detail.distanceFromLast === 0) {
          return;
        } else if (event.detail.distanceFromLast > 0) {
          if (i >= list_item.length) {
            i = 0;
            changeMenu_State(i);
          }

          changeMenu_State(i);
          i++;
        } else if (event.detail.distanceFromLast < 0) {
          console.log(len);
          if (j === 0) {
            j = len - 1;
            changeMenu_State(j);
          }

          changeMenu_State(j);
          j--;
        }
      }
    });
  };

  // changeTheme and changeWallpaper will work in Settings Component
  // function for changing themes
  changeTheme = (screen, menu, menuItem) => {
    if (screen === 3 && menu === 3) {
      const select_btn = document.getElementById("okay-btn");

      select_btn.addEventListener("click", function () {
        let selected_theme = menuItem;

        if (selected_theme === 0) {
          document.getElementsByClassName("ipod-frame")[0].style.background =
            "rgb(74 72 72)";
          document.getElementById("wheel").style.background = "black";
          document.getElementById("wheel").style.color = "rgb(74 72 72)";
          select_btn.style.background = "rgb(74 72 72)";
        } else {
          document.getElementsByClassName("ipod-frame")[0].style.background =
            "silver";
          document.getElementById("wheel").style.background = "ivory";
          document.getElementById("wheel").style.color = "rgb(158 158 158)";
          select_btn.style.background = "silver";
        }
      });
    }
  };

  // function for changing wallpaper
  changeWallpaper = (screen, menu, menuItem) => {
    if (screen === 3 && menu === 3) {
      const select_btn = document.getElementById("okay-btn");

      select_btn.addEventListener("click", function () {
        let selected_wallpaper = menuItem;

        switch (selected_wallpaper) {
          case 0:
            document.getElementById(
              "ipod-screen"
            ).style.backgroundImage = `url(${wallpaper1})`;
            break;
          case 1:
            document.getElementById(
              "ipod-screen"
            ).style.backgroundImage = `url(${wallpaper2})`;
            break;
          case 2:
            document.getElementById(
              "ipod-screen"
            ).style.backgroundImage = `url(${wallpaper3})`;
            break;
          case 3:
            document.getElementById(
              "ipod-screen"
            ).style.backgroundImage = `url(${wallpaper4})`;
            break;
          case 4:
            document.getElementById(
              "ipod-screen"
            ).style.backgroundImage = `url(${wallpaper5})`;
            break;
          default:
            document.getElementById(
              "ipod-screen"
            ).style.backgroundImage = `url(${wallpaper1})`;
            break;
        }
      });
    }
  };

  // The song will be played/pause/Prev/Next in Music component only using Zing touch tap gestures
  // function for play/pausing the audio with play/pause button on controls
  playPauseAudio = (screen, menu) => {
    if (screen === 3 && menu === 1) {
      const playBtn = document.getElementById("play-btn");
      let song = document.getElementById("player");
      const activePlayButton = ZingTouch.Region(playBtn);

      activePlayButton.bind(playBtn, "tap", function (event) {
        if (song.classList.contains("active-song")) {
          if (song.paused) {
            song.play();
          } else {
            song.pause();
          }
        }
      });
    }
  };

  // function to play next song through controls
  playNext = (screen, menu, menuItem, coverList, songList, changeMusicItem) => {
    if (screen === 3 && menu === 1) {
      const nextBtn = document.getElementById("next-btn");
      let songPlayer = document.getElementById("player");

      const activeNextButton = ZingTouch.Region(nextBtn);

      activeNextButton.bind(nextBtn, "tap", function (event) {
        if (menuItem === coverList.length - 1) {
          if (document.getElementById("song-cover")) {
            document
              .getElementById("song-cover")
              .setAttribute("src", coverList[0]);
            songPlayer.src = songList[0];
            changeMusicItem(0);
          }
        } else {
          if (document.getElementById("song-cover")) {
            document
              .getElementById("song-cover")
              .setAttribute("src", coverList[menuItem + 1]);
            songPlayer.src = songList[menuItem + 1];
            changeMusicItem(menuItem + 1);
          }
        }
      });
    } else {
      return;
    }
  };

  // function to play previous song through controls
  playPrev = (screen, menu, menuItem, coverList, songList, changeMusicItem) => {
    if (screen === 3 && menu === 1) {
      const prevBtn = document.getElementById("prev-btn");
      let songPlayer = document.getElementById("player");
      const activePrevButton = ZingTouch.Region(prevBtn);

      activePrevButton.bind(prevBtn, "tap", function (event) {
        if (menuItem === 0) {
          if (document.getElementById("song-cover")) {
            document
              .getElementById("song-cover")
              .setAttribute("src", coverList[coverList.length - 1]);
            songPlayer.src = songList[coverList.length - 1];
            changeMusicItem(coverList.length - 1);
          }
        } else {
          if (document.getElementById("song-cover")) {
            document
              .getElementById("song-cover")
              .setAttribute("src", coverList[menuItem - 1]);
            songPlayer.src = songList[menuItem - 1];
            changeMusicItem(menuItem - 1);
          }
        }
      });
    } else {
      return;
    }
  };

  render() {
    //const unlock = this.state.unlock;
    return (
      <div className="App">
        <div className="ipod-frame">
          <Screen
            lock={this.state.locked}
            screenLock={this.state.screen}
            menuScreen={this.state.menu}
            pickMenu={this.move}
            menuItem={this.state.menuItem}
            changeMenu_State={this.changeMenu}
            option={this.state.options}
            changeMusicItem={this.changeMenuStateMusic}
            changeWallpaper={this.changeWallpaper}
            changeTheme={this.changeTheme}
            playPauseAudio={this.playPauseAudio}
            playNext={this.playNext}
            playPrev={this.playPrev}
          />

          <Controls
            lock={this.state.locked}
            screenLock={this.state.screen}
            onUnlock={this.unlocking}
            enterMenu={this.inMenu}
            exitMenu={this.backMenu}
          />
        </div>
      </div>
    );
  }
}

export default App;
