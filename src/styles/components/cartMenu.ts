import { styled } from "..";

export const CartMenuContainer = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  width: "480px",
  height: "100%",
  backgroundColor: "$gray800",
  padding: "1.5rem",

  h2: {
    marginBottom: "1rem",
  },
});

export const CartMenuHeader = styled("header", {
  display: "flex",
  justifyContent: "flex-end",

  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",

    svg: {
      color: "$gray100",
    },

    "&:hover": {
      opacity: 0.7,
    },
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  width: "95px",
  borderRadius: 8,

  img: {
    objectFit: "cover",
  },
});

export const DetailsContainer = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  marginLeft: "0.8rem",
  gap: "0.8rem",

  p: {
    color: "$gray300",
    fontSize: "$md",
  },

  strong: {
    fontSize: "$md",
  },

  button: {
    background: "transparent",
    border: "none",
    color: "$green500",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ProductsContainer = styled("div", {
  display: "flex",
  justifyContent: "normal",
  flexDirection: "column",
  gap: "1rem",
});

export const FooterContainer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  marginTop: "15rem",
  gap: "1.5rem",
});

export const FooterDetails = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",

  color: "$gray100",

  span: {
    fontSize: "$md",
  },

  strong: {
    fontSize: "$lg",
  },
});

export const ButtonContainer = styled("div", {
  marginTop: "3.5625rem",

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",
    width: "100%",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:no(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});
