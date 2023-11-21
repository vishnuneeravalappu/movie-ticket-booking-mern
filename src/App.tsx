import React from "react";
import { AppHeader } from "./components-header/app-header-renderer";
import { MoviesPreview } from "./components-movies-slider/movies-slider-renderer";
import { useStyles } from "./app-styles";

const App = () => {
  const { classes } = useStyles();
  return (
    <React.Fragment>
      <AppHeader />
      <div className={classes.AppLayoutMain}>
        <MoviesPreview title={"New Releases"} shouldShowRating={true} />
        <MoviesPreview title={"Upcoming Movies"} shouldShowRating={false} />
      </div>
    </React.Fragment>
  );
};
export default App;
