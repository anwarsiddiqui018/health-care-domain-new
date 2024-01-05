// CoachSignUp.js
import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import FormValidator from "./FormValidator";

const CoachSignUp = () => {
  const url = "http://localhost:8080/coaches";
  const [showScreen1, setShowScreen1] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    password: "",
    dateofBirth: "",
    gender: "",
    mobNo: "",
    speciality: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formValidatorRef = React.useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form using the FormValidator component
    // Pass the formData and onChangeHandler as props
    const isValid = formValidatorRef.current.validateForm();

    if (isValid) {
      Axios.post(url, { ...formData }).then((res) => {
        console.log("res", res.data);
        setFormData((prev) => ({ ...prev, id: res.data.id }));
        setShowScreen1(false);
      });
    } else {
      setShowScreen1(true);
      console.log("Form submission failed");
    }
  };

  return (
    <>
      {showScreen1 ? (
        <form onSubmit={handleFormSubmit}>
          {/* Use the FormValidator component and pass necessary props */}
          <FormValidator
            formData={formData}
            onChangeHandler={onChangeHandler}
            ref={formValidatorRef}
          />
          {/* Render other form elements here */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <div>You are a Coach Now</div>
          Your Coach id is {formData.id}
          <div>
            <Link to="/coachlogin">Login Now</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CoachSignUp;
