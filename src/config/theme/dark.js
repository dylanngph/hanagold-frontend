import base, { shadows } from './base';
import {  darkColors } from './colors';

 const darkNav = {
  background: '#101133',
  hover: "#473d5d",
};

 const darkModal = {
  background: '#101133',
};

 const darkToggle = {
  handleBackground: darkColors.card,
};

 const darkAlert = {
  background: darkColors.card,
};

const darkCard = {
  background: darkColors.card,
  boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

const darkTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  alert: darkAlert,
  nav: darkNav,
  modal: darkModal,
  toggle: darkToggle,
  card: darkCard,
  headerBackground: '#27262c',
};

export default darkTheme;
