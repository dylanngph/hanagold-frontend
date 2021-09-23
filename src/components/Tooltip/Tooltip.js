import styled from "styled-components";

const ToolTipText = styled("span")({
  visibility: "hidden",
  minWidth: "300px",
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  borderRadius: "6px",
  padding: 15,
  position: "absolute",
  zIndex: 1,
  top: '120%',
  transform: 'translateX(-50%)',

});

const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  borderBottom: "1px dotted black",
  ":hover span": {
    visibility: "visible"
  }
});

const ToolTipCustom = ({ children, toolTipText }) => (
    <ToolTip>
      {children}
      <ToolTipText>{toolTipText}</ToolTipText>
    </ToolTip>
);

export default ToolTipCustom;
