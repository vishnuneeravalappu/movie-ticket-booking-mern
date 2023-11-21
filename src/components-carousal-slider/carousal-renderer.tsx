import React from "react";
import { useStyles } from "./carousal-styles";
import { CarousalNavbuttons } from "./carousal-nav-buttons";

interface ICarousal {
  shouldShowRating?: boolean;
}

export const Carousal = ({ shouldShowRating = true }) => {
  const { classNamees } = useStyles();
  return (
    <React.Fragment>
      <div className="slideshow-container">
  <div className="mySlides fade">
    <div className="numbertext">1 / 3</div>
    <img src="img1.jpg" style="width:100%">
    <div className="text">Caption Text</div>
  </div>
  <div className="mySlides fade">
    <div className="numbertext">2 / 3</div>
    <img src="img2.jpg" style="width:100%">
    <div className="text">Caption Two</div>
  </div>
  <div className="mySlides fade">
    <div className="numbertext">3 / 3</div>
    <img src="img3.jpg" style="width:100%">
    <div className="text">Caption Three</div>
  </div>
      </div>
      <CarousalNavbuttons/>
<br>
    </React.Fragment>
  );
};
