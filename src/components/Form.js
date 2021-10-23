import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { dishes } from "../data";
import { useStyles } from "../hooks/useStyles";
import useToggle from "../hooks/useToggle";

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
  const [validate, setValidate] = useToggle();

  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = userDish;
  const onChangeDish = (e) => {
    setUserDish({ ...userDish, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...userDish, id: Date.now() };
    console.log(data);
    try {
      let result = await fetch(
        "https://frosty-wood-6558.getsandbox.com:443/dishes",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const { btn } = useStyles();

  return (
    <Wrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
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
          error={name === "" ? !validate : validate}
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
          error={preparation_time === "00:00:00" ? !validate : validate}
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
          error={type === "" ? !validate : validate}
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
              error={no_of_slices === "" ? !validate : validate}
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
              error={diameter === "" ? !validate : validate}
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
            error={spiciness_scale === "" ? !validate : validate}
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
            error={slices_of_bread === "" ? !validate : validate}
          />
        ) : (
          ""
        )}
        <button className={btn}>Post</button>
      </form>
    </Wrapper>
  );
};

export default Form;
