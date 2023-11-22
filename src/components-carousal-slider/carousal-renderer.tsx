import React from "react";
import { useStyles } from "./carousal-styles";
import { CarousalNavbuttons } from "./carousal-nav-buttons";
import { CarousalDots } from "./carousal-dots";
import { carousalItems, getCarousalItem } from "./carousal-helper";

interface ICarousal {}

export const Carousal: React.FC<ICarousal> = () => {
  const { classes } = useStyles();
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const carousalLength = carousalItems.length;

  const prevSlide = React.useCallback(() => {
    setSlideIndex(slideIndex == 0 ? carousalLength - 1 : slideIndex - 1);
    console.log("from prev slide");
  }, [slideIndex]);

  const nextSlide = React.useCallback(() => {
    setSlideIndex(slideIndex == carousalLength - 1 ? 0 : slideIndex + 1);
    console.log("from next slide");
  }, [slideIndex]);

  return (
    <React.Fragment>
      <div className={classes.carousalContainer}>
        <div className={classes.carousalImagesContainer}>
          {getCarousalItem(classes.slideCard, slideIndex)}
        </div>
        <CarousalNavbuttons prevSlide={prevSlide} nextSlide={nextSlide} />
        <CarousalDots length={5} />
      </div>
    </React.Fragment>
  );
};
