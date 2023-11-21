import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  cardContainer: {
    width: "200px",
    height: "auto",
    position: "relative",
  },
  cardBody: {
    overflow: "hidden",
  },
  cardImage: {
    height: "230px",
    [`&:hover`]: {
      transition: "0.5s 0s ease-in-out",
      transform: "scale(1.05)",
    },
  },
  cardFooter: {
    padding: "0px 20px",
    height: "40px",
  },
  cardRatingsBox: {
    boxSizing: "border-box",
    position: "absolute",
    width: "100%",
    top: "190px",
    height: "40px",
    padding: "0px 20px",
    background: "rgba(0,0,0,0.5)",
    lineHeight: "45px",
  },
  cardSubHeading: {
    height: "25px",
  },
  bookmark: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "rgba(0,0,0,0.4)",
    [`&:hover`]: {
      transition: "0.5s 0s ease-in-out",
      background: "rgba(0,0,0, 0.7)",
      [`& svg`]: {
        color: "red",
      },
    },
    [`& svg`]: {
      color: "black",
    },
  },
}));
