import React from "react";
import { useStyles } from "./app-styles";
import { AppMainRouter } from "./Routes/components-app-route";

const App = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.AppLayoutMain}>
      <AppMainRouter />
    </div>
  );
};
export default App;
