import React, { useState, useRef } from "react";
import Axios from "axios";

const UserSignUp = () => {
  const url = "http://localhost:8080/users";
  const [formData, setFormData] = useState({
    id: "21340",
    name: "",
    password: "",
    mobNo: "",
    email: "",
    dateofBirth: "",
    gender: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
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
        err.name = "Password should have 5 to 10 characters";
      }
    } else {
      err.name = "Password required";
    }

    //mobile number
    if (formData.mobNo !== "") {
      if (formData.mobNo.length < 10) {
        err.mobNo = "Mobile Number Should have 10 digits";
      }
    } else {
      err.mobNo = "Mobile reqiure";
    }

    // email
    if (formData.email !== "") {
    } else {
      err.email = "error";
    }
    //gender
    if (formData.gender !== "") {
    } else {
      err.gender = "error";
    }
    //pincode
    if (formData.pincode !== "") {
      if (formData.pincode.length < 6) {
        err.pincode = "error";
      }
    } else {
      err.pincode = "error";
    }
    //city
    if (formData.city !== "") {
      if (formData.city.length < 6) {
        err.city = "City should have 6 to 25 charas";
      }
    } else {
      err.city = "City Required";
    }
    //country
    if (formData.country !== "") {
      if (formData.country.length < 5) {
        err.country = "Country should have 6 to 25 charas";
      }
    } else {
      err.country = "Country Required";
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
        mobNo: formData.mobNo,
        gender: formData.gender,
        email: formData.email,
        dateofBirth: formData.dateofBirth,
        pincode: formData.pincode,
        city: formData.city,
        state: formData.state,
        country: formData.country,
      }).then((res) => {
        console.log("res", formData);
      });
    } else {
      console.log("fail");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          onChange={onChangeHandler}
          value={formData.name}
        />
      </div>
      <span className="non-valid"> {formErrors.state}</span>
      <br />
      <span className="non-valid"> {formErrors.name}</span>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="text"
          onChange={onChangeHandler}
          value={formData.password}
        />
      </div>
      <br />
      <span className="non-valid"> {formErrors.password}</span>

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
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          onChange={onChangeHandler}
          value={formData.email}
        />
      </div>
      <br />
      <span className="non-valid"> {formErrors.email}</span>
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
        <label htmlFor="pincode">Pincode</label>
        <input
          name="pincode"
          type="number"
          onChange={onChangeHandler}
          value={formData.pincode}
        />
      </div>
      <br />
      <span className="non-valid"> {formErrors.pincode}</span>
      <div>
        <label htmlFor="city">City</label>
        <input
          name="city"
          type="text"
          onChange={onChangeHandler}
          value={formData.city}
        />
      </div>
      <br />
      <span className="non-valid"> {formErrors.city}</span>
      <div>
        <label htmlFor="state">State</label>
        <input
          name="state"
          type="text"
          onChange={onChangeHandler}
          value={formData.state}
        />
      </div>
      <br />
      <span className="non-valid"> {formErrors.state}</span>
      <div>
        <label htmlFor="country">Country</label>
        <input
          name="country"
          type="text"
          onChange={onChangeHandler}
          value={formData.country}
        />
      </div>
      <br />
      <span className="non-valid"> {formErrors.country}</span>
      <button>Submit</button>
    </form>
  );
};

export default UserSignUp;
