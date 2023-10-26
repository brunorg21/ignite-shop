import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  button: {
    position: "relative",
    border: 0,
    padding: "0.75rem",
    borderRadius: 6,
    backgroundColor: "$gray900",
    color: "$white",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$gray800",
    },

    div: {
      position: "absolute",
      backgroundColor: "$green500",
      borderRadius: 80,
      bottom: 35,
      left: 26,
      color: "$white",
      padding: "0.4rem",
      width: "18px",
    },
  },
});
