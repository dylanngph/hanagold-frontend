
export const baseColors = {
  failure: "#be123c",
  primary: "#ffffff",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#4880FF",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#eff4f5",
  text: "#202224",
  textDisabled: "#BDC2C4",
  textSubtle: "#333",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  scrollBar: "#4880FF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4880FF",
  background: "#ffffff",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#101133",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
