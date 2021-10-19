import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    all: "unset",
    width: "124px",
    height: "35px",
    background:
      "transparent linear-gradient(90deg, #3ba9fb 0%, #148af1 100%) 0% 0% no-repeat padding-box",
    boxShadow: "0px 2px 7px #00000033",
    borderRadius: "4px",
    opacity: 1,
    marginLeft: "5px",
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
});

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  
  form {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      width: 600px;
      height: 600px;
      padding 25px;
      border-radius: 10px;
  }
`;

const Form = () => {
  const { btn, field } = useStyles();
  return (
    <Wrapper>
      <form noValidate autoComplete="off">
        <TextField
          className={field}
          id="outlined-basic"
          label="Dish name"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <button className={btn}>Order</button>
      </form>
    </Wrapper>
  );
};

export default Form;
