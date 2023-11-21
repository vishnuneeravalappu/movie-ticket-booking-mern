import React from "react";
import { useStyles } from "./carousal-styles";
import classNames from "classnames";

export const CarousalNavbuttons = (
  showSlides: (_arg: number) => void,
  slideIndex: number
) => {
  const { classes } = useStyles();
  const prevSlide = React.useCallback(() => {
    showSlides((slideIndex -= 1));
  }, [showSlides]);
  const nextSlide = React.useCallback(() => {
    showSlides((slideIndex += 1));
  }, [showSlides]);
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
