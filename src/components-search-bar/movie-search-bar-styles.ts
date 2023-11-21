import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  searchBar: {
    margin: "0px auto 0px",
    minWidth: "300px",
    width: "40%",
    fontSize: "14px",
    maxWidth: "1500px",
  },
  searchBarText: {
    height: "30px",
  },
}));
