import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { dishes } from "../data";
import { useStyles } from "../hooks/useStyles";

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
      height: fit-content;
      padding 25px;
      border-radius: 10px;
  }
`;

const Form = () => {
  const handleDishes = (event) => {
    setUserDish({ ...userDish, type: event.target.value });
  };
  const [userDish, setUserDish] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: "",
  });
  const onChangeDish = (e) => {
    setUserDish({ ...userDish, [e.target.id]: e.target.value });
  };

  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = userDish;
  console.log(userDish);

  const { btn } = useStyles();
  return (
    <Wrapper>
      <form noValidate autoComplete="off">
        <TextField
          margin="normal"
          id="name"
          label="dish name"
          variant="outlined"
          color="primary"
          helperText=" "
          fullWidth
          inputProps={{ value: name, onChange: onChangeDish }}
          required
        />
        <TextField
          margin="normal"
          id="preparation_time"
          label="preparation time"
          type="time"
          inputProps={{
            step: "1",
            value: preparation_time,
            onChange: onChangeDish,
          }}
          InputLabelProps={{ shrink: true }}
          value="00:00:00"
          helperText="hh:mm:ss"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          id="type"
          margin="normal"
          select
          label="dish type"
          inputProps={{ value: type, onChange: onChangeDish }}
          onChange={handleDishes}
          helperText="Please select your dish"
          required
        >
          {dishes.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
        {type === "pizza" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <TextField
              margin="normal"
              id="no_of_slices"
              label="number of slices"
              type="number"
              inputProps={{
                step: "2",
                max: 100,
                min: 0,
                value: no_of_slices,
                onChange: onChangeDish,
              }}
              variant="outlined"
              color="primary"
              helperText=" "
              fullWidth
              required
            />
            <TextField
              margin="normal"
              id="diameter"
              label="diameter"
              type="number"
              inputProps={{
                step: "0.01",
                min: "0.01",
                value: diameter,
                onChange: onChangeDish,
              }}
              variant="outlined"
              color="primary"
              helperText=" "
              fullWidth
              required
            />
          </div>
        ) : (
          ""
        )}
        {type === "soup" ? (
          <TextField
            margin="normal"
            id="spiciness_scale"
            label="spiciness scale"
            type="number"
            inputProps={{
              step: "1",
              max: 10,
              min: 1,
              value: spiciness_scale,
              onChange: onChangeDish,
            }}
            variant="outlined"
            color="primary"
            fullWidth
            helperText="choose from 1 - 10"
            required
          />
        ) : (
          ""
        )}
        {type === "sandwich" ? (
          <TextField
            margin="normal"
            id="slices_of_bread"
            label="slices of bread"
            type="number"
            inputProps={{
              step: "1",
              min: 1,
              value: slices_of_bread,
              onChange: onChangeDish,
            }}
            variant="outlined"
            color="primary"
            fullWidth
            helperText=" "
            required
          />
        ) : (
          ""
        )}
        <button className={btn}>Order</button>
      </form>
    </Wrapper>
  );
};

export default Form;
