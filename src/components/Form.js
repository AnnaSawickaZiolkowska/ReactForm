import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";

export const dishes = [
  { label: "", value: "" },
  { label: "pizza", value: "pizza" },
  { label: "soup", value: "soup" },
  { label: "sandwich", value: "sandwich" },
];

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
  const [dish, setDish] = useState("");
  const handleDishes = (event) => {
    setDish(event.target.value);
  };
  const { btn, field, textField } = useStyles();
  console.log(dish);
  return (
    <Wrapper>
      <form noValidate autoComplete="off">
        <TextField
          className={field}
          id="outlined-basic"
          label="Dish name"
          views={["hours", "minutes", "seconds"]}
          format="HH:mm:ss"
          variant="outlined"
          color="primary"
          fullWidth
          required
          style={{ margin: "10px 0" }}
        />
        {/* <input className={textField} type="time" step="1" variant="outlined" /> */}
        <TextField
          id="outlined-select-currency"
          className={field}
          select
          label="Dish type"
          value={dish}
          onChange={handleDishes}
          helperText="Please select your dish"
          style={{ margin: "10px 0" }}
          required
        >
          {dishes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button className={btn}>Order</button>
      </form>
    </Wrapper>
  );
};

export default Form;
