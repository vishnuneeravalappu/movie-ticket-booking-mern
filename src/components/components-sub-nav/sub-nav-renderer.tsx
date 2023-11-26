import React from "react";
import { useStyles } from "./sub-nav-styles";
import { Button, ButtonGroup } from "@mui/material";
import { barItemsLeft, barItemsRight } from "./subnav-utils";
import classNames from "classnames";

export const SubNavBar = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.subNavContainer}>
        {getBarItemsGroup(barItemsLeft, classes.subNavButtonGroup)}
        {getBarItemsGroup(
          barItemsRight,
          classNames(classes.subNavButtonGroup, classes.subNavButtonGroupRight)
        )}
      </div>
    </>
  );
};

const getBarItemsGroup = (itemList: string[], classes: string) => {
  return (
    <ButtonGroup
      variant="text"
      aria-label="text button group"
      className={classes}
    >
      {itemList.map((item) => (
        <Button key={item}>{item}</Button>
      ))}
    </ButtonGroup>
  );
};
