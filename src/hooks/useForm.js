import { useEffect, useState } from "react";
import validation from "../components/validation";

const useForm = (submitForm) => {
const handleDishes = (e) => {
    setUserDish({ ...userDish, type: e.target.value });
  };
  const [userDish, setUserDish] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
    no_of_slices: 0,
    diameter: 0,
    spiciness_scale: 0,
    slices_of_bread: 0,
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false)
 
  const onChangeDish = (e) => {
    setUserDish({ ...userDish, [e.target.id]: e.target.value });
  };

useEffect(() => {
  if (Object.keys(errors).length === 0 && dataIsCorrect) {
    submitForm(true);
    const data = { ...userDish, id: Date.now() };
      try {
        let result = fetch(
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
  }
}, [errors, dataIsCorrect, submitForm, userDish])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(userDish));
    setDataIsCorrect(true);
  };

  return {
    handleDishes, onChangeDish, handleSubmit, errors, userDish
  }
}

export default useForm;