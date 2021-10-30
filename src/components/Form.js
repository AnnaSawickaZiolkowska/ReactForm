import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DISHES, SPICINESS_SCALE } from "../data";
import { useStyles } from "../hooks/useStyles";
import { Wrapper } from "./Form.styled";
import useForm from "../hooks/useForm";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  const { btn } = useStyles();
  const {
    handleDishes,
    handleSpiciness,
    onChangeDish,
    handleSubmit,
    errors,
    userDish,
  } = useForm(submitForm);
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = userDish;

  return (
    <Wrapper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
          error={Boolean(errors?.name)}
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
          helperText={
            errors.preparation_time ? errors.preparation_time : "hh:mm:ss"
          }
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={Boolean(errors?.preparation_time)}
        />
        <TextField
          id="type"
          margin="normal"
          select
          label="dish type"
          inputProps={{ value: type, onChange: onChangeDish }}
          onChange={handleDishes}
          helperText={errors.type ? errors.type : "Please select your dish"}
          required
          error={Boolean(errors?.type)}
        >
          {DISHES.map(({ value, label }) => (
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
                min: 2,
                value: no_of_slices,
                onChange: onChangeDish,
              }}
              variant="outlined"
              color="primary"
              helperText={errors.no_of_slices ? errors.no_of_slices : " "}
              fullWidth
              required
              error={Boolean(errors?.no_of_slices)}
            />
            <TextField
              margin="normal"
              id="diameter"
              label="diameter"
              type="number"
              inputProps={{
                step: "01.00",
                min: "18.00",
                value: diameter,
                onChange: onChangeDish,
              }}
              variant="outlined"
              color="primary"
              helperText={errors.diameter ? errors.diameter : " "}
              fullWidth
              required
              error={Boolean(errors?.diameter)}
            />
          </div>
        ) : (
          ""
        )}
        {type === "soup" ? (
          <FormControl component="fieldset">
            <FormLabel component="legend">spiciness scale</FormLabel>
            <RadioGroup
              aria-label="spiciness scale"
              name="spiciness_scale"
              id="spiciness_scale"
              onChange={handleSpiciness}
              value={spiciness_scale}
              row
            >
              {SPICINESS_SCALE.map(({ value, label }) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio size="small" />}
                  label={label}
                />
              ))}
            </RadioGroup>
          </FormControl>
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
            helperText={errors.slices_of_bread ? errors.slices_of_bread : " "}
            required
            error={Boolean(errors?.slices_of_bread)}
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
