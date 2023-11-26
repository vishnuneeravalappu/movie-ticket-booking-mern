import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  subNavContainer: {
    boxSizing: "border-box",
    width: "100%",
    height: "30px",
    background: "#333545",
  },
  subNavButtonGroupRight: {
    float: "right",
  },
  subNavButtonGroup: {
    [`& button`]: {
      border: "none !important",
      padding: "3px 15px",
      color: "rgba(256,256,256,0.8)",
      [`&:hover`]: {
        transition: "0.5s 0s ease-in-out",
        color: "white",
      },
    },
  },
}));
