const validation = (userDish) => {
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = userDish;
  let errors = {};

  if (!name) {
    errors.name = "This field is required.";
  }
  if (preparation_time === "00:00:00") {
    errors.preparation_time = "This field is required.";
  }
  if (!type) {
    errors.type = "This field is required.";
  }

  if (type === "pizza") {
    if (!no_of_slices) {
      errors.no_of_slices = "This field is required.";
    } else if (no_of_slices < 1) {
      errors.no_of_slices = "Please select at least 2 slices.";
    }
    if (!diameter) {
      errors.diameter = "This field is required.";
    } else if (diameter < 18) {
      errors.diameter = "Minimum diameter 18cm.";
    }
  }

  if (type === "soup") {
    if (!spiciness_scale) {
      errors.spiciness_scale = "This field is required.";
    } else if (spiciness_scale < 1 || spiciness_scale > 10) {
      errors.spiciness_scale = "Choose from 1 to 10.";
    }
  }

  if (type === "sandwich") {
    if (!slices_of_bread) {
      errors.slices_of_bread = "This field is required.";
    } else if (slices_of_bread < 1) {
      errors.slices_of_bread = "Please select at least 1 slice of bread.";
    }
  }

  return errors;
};

export default validation;
