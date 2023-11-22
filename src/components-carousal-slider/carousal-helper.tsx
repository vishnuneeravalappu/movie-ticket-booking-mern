import React from "react";

export const getCarousalItem = (styles: string, slideIndex: number) => {
  return (
    <div className={styles}>
      <img
        src={carousalItems[slideIndex].imgUrl}
        alt={carousalItems[slideIndex].caption}
      />
    </div>
  );
};

export const carousalItems = [
  {
    id: "1",
    imgUrl: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    caption: "Caption Text",
  },
  {
    id: "2",
    imgUrl: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    caption: "Caption Text",
  },
  {
    id: "3",
    imgUrl: "https://www.w3schools.com/howto/img_lights_wide.jpg",
    caption: "Caption Text",
  },
];
