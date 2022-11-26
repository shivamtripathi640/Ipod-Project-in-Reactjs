import React from "react";
import "../App.css";
import Header from "./Header";
import LockScreen from "./LockScreen";
import MenuScreen from "./MenuScreen";
import wallpaper from "../assets/images/wallpaper2.jpg";
// importing main menu screens
import Coverflow from "./Coverflow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";
// importing sub menu screens
import Cover from "./Cover";
import MusicPlayer from "./MusicPlayer";
import GamePlayer from "./GamePlayer";
import Theme from "./Theme";
import Wallpaper from "./Wallpaper";

// screen types
// Screen 0 = Lock Screen
// Screen 1 = Main Menu
// Screen 2 = Sub Menus of menu
// Screen 3 = Dedicated screen for categories

const Screen = (props) => {
  let screen = props.screenLock;
  let displayMenu = props.menuScreen;
  let displayScreen;

  // main menu screen
  if (screen <= 1) {
    // Unlocked Screen
    if (screen === 1) {
      displayScreen = (
        <MenuScreen
          pickMenu={props.pickMenu}
          changeMenu_State={props.changeMenu_State}
          screen={props.screenLock}
          lock={props.lock}
          menuItem={props.menuItem}
        />
      );
    }
    // locked screen
    else {
      displayScreen = <LockScreen />;
    }
  }
  //  sub menu screen
  else if (screen === 2) {
    // In coverflow menu
    if (displayMenu === 0) {
      displayScreen = <Coverflow menuItem={props.menuItem} />;
    }
    // In Music menu
    else if (displayMenu === 1) {
      displayScreen = <Music menuItem={props.menuItem} />;
    }
    // In Games menu
    else if (displayMenu === 2) {
      displayScreen = <Games menuItem={props.menuItem} />;
    }
    // In Settings
    else {
      displayScreen = <Settings menuItem={props.menuItem} />;
    }
  }
  //  options for the selected submenu
  else if (screen === 3) {
    // Selected cover
    if (displayMenu === 0) {
      displayScreen = <Cover menuItem={props.menuItem} />;
    }
    // Music Player
    else if (displayMenu === 1) {
      displayScreen = (
        <MusicPlayer
          menuItem={props.menuItem}
          playPauseAudio={props.playPauseAudio}
          playNext={props.playNext}
          playPrev={props.playPrev}
          changeMusicItem={props.changeMusicItem}
          screen={screen}
          menu={displayMenu}
        />
      );
    }
    // Display for game (Just GIFs)
    else if (displayMenu === 2) {
      displayScreen = <GamePlayer menuItem={props.menuItem} />;
    }
    // Either for themes or wallpaper
    else {
      if (props.option === 0) {
        displayScreen = (
          <Theme
            menuItem={props.menuItem}
            changeTheme={props.changeTheme}
            screen={screen}
            menu={displayMenu}
          />
        );
      } else if (props.option === 1) {
        displayScreen = (
          <Wallpaper
            menuItem={props.menuItem}
            changeWallpaper={props.changeWallpaper}
            screen={screen}
            menu={displayMenu}
          />
        );
      }
    }
  }

  return (
    <div id="ipod-screen" style={styling.frame}>
      <Header />
      {displayScreen}
    </div>
  );
};

// ***************style************************

let styling = {
  frame: {
    minHeight: 300,
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "4px black solid",
    borderRadius: 5
  }
};

export default Screen;
