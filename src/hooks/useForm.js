import { useState } from "react";
import validation from "../components/validation";

const useForm = () => {
const handleDishes = (e) => {
    setUserDish({ ...userDish, type: e.target.value });
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
  const [errors, setErrors] = useState({});
 
  const onChangeDish = (e) => {
    setUserDish({ ...userDish, [e.target.id]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(userDish));
    if (Object.keys(errors).length === 0) {
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
        console.log(error.message);
      }
    } else {
        return
    }
  };

  return {
    handleDishes, onChangeDish, handleSubmit, errors, userDish
  }
}

export default useForm;