import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  carousalContainer: {
    boxSizing: "border-box",
    maxWidth: "1000px",
    position: "relative",
    margin: "auto",
  },
  carousalArrowButton: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    marginTop: "-22px",
    padding: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    [`&hover:`]: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
  nextButton: {
    right: "0",
    borderRadius: "3px 0 0 3px",
  },
  dots: {
    cursor: "pointer",
    height: "15px",
    width: "15px",
    margin: "0 2px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color 0.6s ease",
    [`&active:`]: {
      backgroundColor: "#717171",
    },
    [`&hover:`]: {
      backgroundColor: "#717171",
    },
  },
}));
