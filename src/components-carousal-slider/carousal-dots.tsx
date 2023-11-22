import React from "react";
import { useStyles } from "./carousal-styles";
interface ICarousalDots {
  length: number;
}

export const CarousalDots: React.FC<ICarousalDots> = ({ length }) => {
  const { classes } = useStyles();
  const array = [1, 2, 3];
  // const currentSlide = React.useCallback(
  //   (event: MouseEventHandler<HTMLSpanElement>, index: number) => {
  //     showSlides(index);
  //   },
  //   [showSlides]
  // );
  return (
    <div className={classes.dotsContainer}>
      {array.map((item) => {
        return <span key={item.toString()} className={classes.dots}></span>;
      })}
    </div>
  );
};
