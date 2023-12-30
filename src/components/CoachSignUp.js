import React, { useState, useRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const CoachSignUp = () => {
  const url = "http://localhost:3000/coaches";
  const [showScreen1, setShowScreen1] = useState(true);
  const [formData, setFormData] = useState({
    id: "5",
    name: "",
    password: "",
    dateofBirth: "",
    gender: "",
    mobNo: "",
    speciality: "",
  });
  const dateInputRef = useRef(null);

  const [formErrors, setFormErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateForm = () => {
    let err = {};

    if (formData.name !== "") {
      if (formData.name.length < 3) {
        err.name = "Name should have 3 to 50 characater";
      }
    } else {
      err.name = "Name cannot be Empty";
    }
    //pasword wala
    if (formData.password !== "") {
      if (formData.password.length < 5) {
        err.password = "Password should have 5 to 10 characters";
      }
    } else {
      err.password = "Password required";
    }
    //mobile number
    if (formData.mobNo !== "") {
      if (formData.mobNo.length < 10) {
        err.mobNo = "Mobile Number Should have 10 digits";
      }
    } else {
      err.mobNo = "Mobile reqiure";
    }

    //gender
    if (formData.gender !== "") {
    } else {
      err.gender = "error";
    }

    //speciacl
    if (formData.speciality !== "") {
      if (formData.speciality.length < 6) {
        err.speciality = "speciality should have 6 to 25 charas";
      }
    } else {
      err.speciality = "speciality Required";
    }

    setFormErrors({ ...err });
    return Object.keys(err).length < 1;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    let isValid = validateForm();
    if (isValid) {
      Axios.post(url, {
        id: formData.id,
        name: formData.name,
        password: formData.password,
        dateofBirth: formData.dateofBirth,
        gender: formData.gender,
        mobNo: formData.mobNo,
        speciality: formData.speciality,
      }).then((res) => {
        console.log("res", formData);
      });
      setShowScreen1(false);
    } else {
      setShowScreen1(true);
      console.log("fail");
    }
  };

  return (
    <>
      {showScreen1 ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={onChangeHandler}
              value={formData.name}
            />
          </div>{" "}
          <span className="non-valid"> {formErrors.name}</span>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              onChange={onChangeHandler}
              value={formData.password}
            />
          </div>
          <br />
          <span className="non-valid"> {formErrors.password}</span>
          <div>
            <label htmlFor="dateOfBirth">dateOfBirth</label>
            <input
              name="dateofBirth"
              type="date"
              onChange={onChangeHandler}
              ref={dateInputRef}
            />
          </div>
          <div>
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <div>
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={onChangeHandler}
                checked={formData.gender === "M"}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={onChangeHandler}
                checked={formData.gender === "F"}
              />
              <label htmlFor="female">Female</label>
            </div>{" "}
            <span className="non-valid"> {formErrors.gender}</span>
          </div>
          <div>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              name="mobNo"
              type="text"
              onChange={onChangeHandler}
              value={formData.mobNo}
            />
          </div>
          <br />
          <span className="non-valid"> {formErrors.mobNo}</span>
          <div>
            <label htmlFor="speciality">Speciality</label>
            <input
              name="speciality"
              type="text"
              onChange={onChangeHandler}
              value={formData.speciality}
            />
          </div>
          <br />
          <span className="non-valid"> {formErrors.speciality}</span>
          <div>
            <button onClick={() => setShowScreen1(true)}>Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <div> You are a Coach Now</div>
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
