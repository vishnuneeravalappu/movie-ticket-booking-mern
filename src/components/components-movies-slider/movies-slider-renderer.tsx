import React from "react";
import { useStyles } from "./movies-slider-styles";
import { MovieCard } from "../components-movie-card/movie-card-renderer";
import { Typography } from "@mui/material";

interface IMoviesPreview {
  title: string;
  shouldShowRating?: boolean;
}

export const MoviesPreview: React.FunctionComponent<IMoviesPreview> = (
  props
) => {
  const { title, shouldShowRating } = props;
  const { classes } = useStyles();
  return (
    <div className={classes.sliderContainer}>
      <Typography
        variant="h6"
        component="h6"
        className={classes.sliderContainerHeading}
      >
        {title}
      </Typography>
      <MovieCard shouldShowRating={shouldShowRating} />
      <MovieCard shouldShowRating={shouldShowRating} />
      <MovieCard shouldShowRating={shouldShowRating} />
      <MovieCard shouldShowRating={shouldShowRating} />
      <MovieCard shouldShowRating={shouldShowRating} />
    </div>
  );
};
