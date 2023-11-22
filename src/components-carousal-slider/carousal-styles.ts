import { Hidden } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  carousalContainer: {
    width: "fit-content",
    position: "relative",
    backgroundPosition: "attachement",
    margin: "auto",
    overflowX: "hidden",
  },
  carousalImagesContainer: {
    width: "100%",
    display: "flex",
  },
  slideCard: {
    display: "inline-block",
    [`&img:`]: {
      width: "100%",
    },
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
  dotsContainer: {
    display: "none",
    position: "absolute",
    bottom: "25px",
    textAlign: "center",
    width: "100%",
  },
  dots: {
    cursor: "pointer",
    height: "10px",
    width: "10px",
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
