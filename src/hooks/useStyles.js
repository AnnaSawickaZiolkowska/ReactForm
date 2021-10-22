import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    btn: {
      all: "unset",
      width: "124px",
      height: "35px",
      background:
        "transparent linear-gradient(90deg, #3ba9fb 0%, #148af1 100%) 0% 0% no-repeat padding-box",
      boxShadow: "0px 2px 7px #00000033",
      borderRadius: "4px",
      opacity: 1,
      textTransform: "uppercase",
      fontSize: "13px",
      fontWeight: "bold",
      lineHeight: "18px",
      textAlign: "center",
      color: "#fff",
      cursor: "pointer",
      marginLeft: "auto",
      marginTop: "15px",
      "&:hover": {
        background:
          "transparent linear-gradient(90deg, #148af1 0%, #3ba9fb 100%) 0% 0% no-repeat padding-box",
      },
    },
    field: {
      marginTop: "20px",
      marginBottom: "20px",
    },
    textField: {
      height: "55px",
      borderRadius: "4px",
      marginTop: "20px",
      color: "rgba(0, 0, 0, 0.6)",
    },
  });