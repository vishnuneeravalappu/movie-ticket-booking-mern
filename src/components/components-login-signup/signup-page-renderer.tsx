import React from "react";
import { useStyles } from "./login-page-styles";
import { TextField, Button, Link, Typography } from "@mui/material";
import classNames from "classnames";

export const SignupPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loginPageContainer}>
      <Typography variant="h4" className={classes.formHeading}>
        Sign up
      </Typography>
      <div className={classes.loginForm}>
        <TextField
          label={"Email address"}
          error={false}
          required
          size="small"
          className={classes.inputField}
        />
        <TextField
          error={false}
          label={"Password"}
          required
          size="small"
          className={classes.inputField}
        />
        <TextField
          error={false}
          label={"Confirm Password"}
          required
          size="small"
          className={classes.inputField}
        />
        <Button
          onClick={() => {}}
          className={classes.submitButton}
          variant="contained"
        >
          Submit
        </Button>
        <div className={classes.footerLinkCollection}>
          <Link
            className={classNames(classes.footerLink, classes.footerRightLink)}
            href={"/login"}
          >
            Already a user? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
