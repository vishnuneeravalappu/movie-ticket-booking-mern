import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  headerContainer: {
    display: "inline-flex",
    boxSizing: "border-box",
    width: "100%",
    padding: "15px",
    height: "70px",
    background: "rgba(0,0,0,0.2)",
  },
  appLogo: {
    background: "red",
    width: "120px",
    height: "40px",
  },
  headerButton: {
    float: "right",
  },
}));
