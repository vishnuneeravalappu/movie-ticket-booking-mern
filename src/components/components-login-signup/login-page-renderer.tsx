import React from "react";
import { useStyles } from "./login-page-styles";
import { TextField, Button, Link, Typography } from "@mui/material";
import classNames from "classnames";

export const LoginPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loginPageContainer}>
      <Typography variant="h4" className={classes.formHeading}>
        Sign in
      </Typography>
      <div className={classes.loginForm}>
        <TextField
          size="small"
          label={"Username"}
          error={false}
          required
          className={classes.inputField}
        />
        <TextField
          size="small"
          error={false}
          label={"Password"}
          required
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
          <Link className={classes.footerLink} href={"#"}>
            Forgot Password?
          </Link>
          <Link
            className={classNames(classes.footerLink, classes.footerRightLink)}
            href={"/signup"}
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
