import React from "react";
import { Carousal } from "../components-carousal-slider/carousal-renderer";
import { AppHeader } from "../components-header/app-header-renderer";
import { MoviesPreview } from "../components-movies-slider/movies-slider-renderer";
import { useStyles } from "./home-layot-styles";

export const Home = () => {
  const { classes } = useStyles();
  return (
    <React.Fragment>
      <AppHeader />
      <div className={classes.homeLayoutMain}>
        <Carousal />
        <MoviesPreview title={"New Releases"} shouldShowRating={true} />
        <MoviesPreview title={"Upcoming Movies"} shouldShowRating={false} />
      </div>
    </React.Fragment>
  );
};
