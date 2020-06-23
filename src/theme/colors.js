// import config setting
import config from "../config";

// Color Themes
const themes = {
  jade: {
    // primary color
    primaryColor: "#00b970",
    primaryColorDark: "#00945a",
    primaryColorLight: "#00e78c",
    onPrimaryColor: "#fff",

    // accent color
    accentColor: "#0069b9",
    onAccentColor: "#fff",

    // secondary color, primary color split
    secondaryColor: "#b90039",
    onSecondaryColor: "#fff",

    // tertiary color, secondary color intermediately related
    tertiaryColor: "#ffa400",
    onTertiaryColor: "#fff",

    // status bar color
    statusBarColor: "#fff",

    // gradient colors
    primaryGradientColor: "#00b970",
    secondaryGradientColor: "#00b9a7",

    // overlay color
    overlayColor: "#b90039",

    // text color
    primaryText: "#010203",
    secondaryText: "#5d5d5d",
    disabledText: "rgba(0, 0, 0, 0.38)",

    // background, surface
    background: "#fff",
    onBackground: "#212121",
    surface: "#fff",
    onSurface: "#757575",
    error: "#cd040b",
    onError: "#fff",
    black: "#010203",
    white: "#fff"
  },
 
  blueberry: {
    // primary color
    primaryColor: "#db6367",
    primaryColorDark: "#f03e3e",
    primaryColorLight: "#f09eac",
    onPrimaryColor: "#fff",

    // accent color
    accentColor: "#01ad95",
    onAccentColor: "#fff",

    // secondary color, primary color split
    secondaryColor: "#e37486", // '#fac04c'
    onSecondaryColor: "#fff",

    // tertiary color, secondary color intermediately related
    tertiaryColor: "#de5246", // '#e0115f'
    onTertiaryColor: "#fff",

    // status bar color
    statusBarColor: "#fff",

    // gradient colors
    primaryGradientColor: "#4f86f7",
    secondaryGradientColor: "#e87d88",

    // overlay color
    overlayColor: "#fb9d9d",

    // text color
    primaryText: "rgba(0, 0, 0, 0.87)",
    secondaryText: "rgba(0, 0, 0, 0.54)",
    disabledText: "rgba(0, 0, 0, 0.38)",

    // background, surface
    background: "#fff",
    onBackground: "#212121",
    surface: "#fff",
    onSurface: "#757575",
    error: "#cd040b",
    onError: "#fff",
    black: "#000",
    white: "#fff"
  }
};

const theme = themes[config.theme];

export default theme;
