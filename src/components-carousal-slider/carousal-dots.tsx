import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useStyles } from "./carousal-styles";
import classNames from "classnames";

export const CarousalNavbuttons = (
  showSlides: (_arg: number) => void,
  slideIndex: number
) => {
  const { classes } = useStyles();
  const currentSlide = React.useCallback(
    (
      event: DetailedHTMLProps<
        HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
      >,
      index: number
    ) => {
      showSlides(index);
    },
    [showSlides]
  );
  return (
    <div style="text-align:center">
      <span className={} onClick={currentSlide((index = slideIndex))}></span>
    </div>
  );
};
