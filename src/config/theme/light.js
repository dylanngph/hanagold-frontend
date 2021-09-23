import base, { shadows } from './base';
import { lightColors } from "./colors";

 const lightNav = {
  background: lightColors.card,
  hover: "#EEEAF4",
};

 const lightModal = {
  background: lightColors.card,
};

 const lightToggle = {
  handleBackground: lightColors.card,
};

 const lightAlert = {
  background: lightColors.card,
};


const lightCard = {
  background: lightColors.card,
  boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

const lightTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  alert: lightAlert,
  nav: lightNav,
  modal: lightModal,
  toggle: lightToggle,
  card: lightCard,
  headerBackground: lightNav,
};

export default lightTheme;
