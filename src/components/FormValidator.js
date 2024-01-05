// FormValidator.js
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const FormValidator = forwardRef(({ formData, onChangeHandler }, ref) => {
  const [formErrors, setFormErrors] = useState({});
  const dateInputRef = useRef(null);

  const validateForm = () => {
    let err = {};
    // Name validation
    if (!formData.name.trim()) {
      err.name = "Name cannot be empty";
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      err.name = "Name should have 3 to 50 characters";
    }

    // Password validation
    if (!formData.password.trim()) {
      err.password = "Password required";
    } else if (formData.password.length < 5 || formData.password.length > 10) {
      err.password = "Password should have 5 to 10 characters";
    }

    // Mobile number validation
    if (!formData.mobNo.trim()) {
      err.mobNo = "Mobile number required";
    } else if (formData.mobNo.length !== 10) {
      err.mobNo = "Mobile number should have 10 digits";
    }

    // Gender validation
    if (!formData.gender.trim()) {
      err.gender = "Gender is required";
    }

    // Speciality validation
    if (!formData.speciality.trim()) {
      err.speciality = "Speciality is required";
    } else if (
      formData.speciality.length < 6 ||
      formData.speciality.length > 25
    ) {
      err.speciality = "Speciality should have 6 to 25 characters";
    }

    setFormErrors({ ...err });
    return Object.keys(err).length === 0;
  };

  const handleValidation = (e) => {
    const { name } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Expose the dateInputRef to the parent component
  useImperativeHandle(ref, () => ({
    dateInputRef,
    validateForm, // Expose the validateForm function
  }));

  return (
    <>
      {/* Render your form inputs and error messages here */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={(e) => {
            onChangeHandler(e);
            handleValidation(e);
          }}
          value={formData.name}
          className={formErrors.name ? "error" : ""}
        />
        <span className="non-valid"> {formErrors.name}</span>
      </div>
      {/* Repeat similar blocks for other form fields */}
      <div>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          onChange={(e) => {
            onChangeHandler(e);
            handleValidation(e);
          }}
          value={formData.password}
          className={formErrors.password ? "error" : ""}
        />
        <span className="non-valid"> {formErrors.password}</span>
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date-of-Birth: </label>
        <input
          name="dateofBirth"
          type="date"
          onChange={(e) => {
            onChangeHandler(e);
            handleValidation(e);
          }}
          ref={dateInputRef}
          value={formData.dateOfBirth}
          className={formErrors.dateOfBirth ? "error" : ""}
        />
        <span className="non-valid"> {formErrors.dateOfBirth}</span>
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
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
        </div>
        <span className="non-valid"> {formErrors.gender}</span>
      </div>
      <div>
        <label htmlFor="mobNo">Mobile Number</label>
        <input
          name="mobNo"
          type="text"
          onChange={(e) => {
            onChangeHandler(e);
            handleValidation(e);
          }}
          value={formData.mobNo}
          className={formErrors.mobNo ? "error" : ""}
        />
        <span className="non-valid"> {formErrors.mobNo}</span>
      </div>
      <div>
        <label htmlFor="speciality">Speciality</label>
        <input
          name="speciality"
          type="text"
          onChange={(e) => {
            onChangeHandler(e);
            handleValidation(e);
          }}
          value={formData.speciality}
          className={formErrors.speciality ? "error" : ""}
        />
        <span className="non-valid"> {formErrors.speciality}</span>
      </div>
    </>
  );
});

export default FormValidator;
