import React from "react";
import { useStyles } from "./carousal-styles";
import classNames from "classnames";

interface ICarousalNavbuttons {
  prevSlide: () => void;
  nextSlide: () => void;
}

export const CarousalNavbuttons: React.FunctionComponent<
  ICarousalNavbuttons
> = ({ nextSlide, prevSlide }) => {
  const { classes } = useStyles();

  return (
    <>
      <a className={classes.carousalArrowButton} onClick={prevSlide}>
        &#10094;
      </a>
      <a
        className={classNames(classes.carousalArrowButton, classes.nextButton)}
        onClick={nextSlide}
      >
        &#10095;
      </a>
    </>
  );
};
