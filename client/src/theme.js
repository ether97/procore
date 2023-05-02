export const colorTokens = {
  greatBlue: {
    DEFAULT: "#2A669F",
    50: "#E4F7F8",
    100: "#CCEEF2",
    200: "#9CD7E5",
    300: "#6CB9D8",
    400: "#3B94CB",
    500: "#2A669F",
    600: "#234B83",
    700: "#1B3366",
    800: "#14204A",
    900: "#0C102E",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

export const invertHex = (hex) => {
  return (Number(`0x1${hex}`) ^ 0xffffff)
    .toString(16)
    .substring(1)
    .toUpperCase();
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.greatBlue[100],
              main: colorTokens.greatBlue[200],
              mediumMain: colorTokens.greatBlue[300],
              medium: colorTokens.greatBlue[400],
              light: colorTokens.greatBlue[700],
            },
            background: {
              default: colorTokens.greatBlue[900],
              alt: colorTokens.greatBlue[800],
            },
          }
        : {
            primary: {
              dark: invertHex(colorTokens.primary[200]),
              main: invertHex(colorTokens.primary[500]),
              light: invertHex(colorTokens.primary[800]),
            },
            neutral: {
              dark: invertHex(colorTokens.greatBlue[100]),
              main: invertHex(colorTokens.greatBlue[200]),
              mediumMain: invertHex(colorTokens.greatBlue[300]),
              medium: invertHex(colorTokens.greatBlue[400]),
              light: invertHex(colorTokens.greatBlue[700]),
            },
            background: {
              default: invertHex(colorTokens.greatBlue[900]),
              alt: invertHex(colorTokens.greatBlue[800]),
            },
          }),
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  };
};
