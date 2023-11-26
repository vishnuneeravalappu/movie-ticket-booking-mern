import React from "react";
import { useStyles } from "./app-header-styles";
import { Button } from "@mui/material";
import { SearchBar } from "../components-search-bar/movie-search-bar-renderer";
import { SubNavBar } from "../components-sub-nav/sub-nav-renderer";
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.appLogo}></div>
        <SearchBar />
        <Button
          size="small"
          className={classes.headerButton}
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign in
        </Button>
      </div>
      <SubNavBar />
    </React.Fragment>
  );
};
