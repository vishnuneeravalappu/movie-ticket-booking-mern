import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  sliderContainer: {
    position: "relative",
    boxSizing: "border-box",
    padding: "50px  40px",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  sliderContainerHeading: {
    position: "absolute",
    top: "10px",
  },
  subNavButtonGroupRight: {},
  subNavButtonGroup: {},
}));
