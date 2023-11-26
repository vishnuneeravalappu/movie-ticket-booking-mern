import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  loginPageContainer: {
    width: "fit-content",
    margin: "auto",
  },
  formHeading: {
    textAlign: "center",
    display: "block",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  loginForm: {
    display: "block",
    width: "450px",
    margin: "10px 0px",
    padding: "30px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  inputField: {
    marginBottom: "20px",
    width: "100%",
  },
  submitButton: {
    display: "block",
    width: "100%",
  },
  footerLinkCollection: {
    marginTop: "10px",
  },
  footerLink: {
    textDecoration: "none",
    color: "#1976d2",
    [`&:hover`]: {
      textDecorationLine: "underline",
    },
  },
  footerRightLink: {
    float: "right",
  },
}));
