import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CoachLogin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    userId: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = validate();
    if (isValid) {
      console.log("submitted");
      const result = await axios.get("http://localhost:3000/coaches");
      const users = result.data;
      const allowredirect = users.reduce((isValidUser, currentUser) => {
        if (
          String(currentUser.id) === formValues.userId &&
          String(currentUser.password) === formValues.password
        ) {
          isValidUser = true;
        }
        return isValidUser;
      }, false);
      if (allowredirect) {
        navigate("/coachhome", { state: { isLogedIn: true } });
      }
      console.log("result", result);
    } else {
      console.log("fail");
    }
  };
  const validate = () => {
    const errors = {};

    if (!formValues.userId) {
      errors.userId = "Id field is required!";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    } else if (formValues.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    setFormErrors({ ...errors });
    return Object.keys(errors).length < 1;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login as Life Coach</h2>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>UserId</label>
          <input
            type="number"
            name="userId"
            placeholder="UserId"
            value={formValues.userId}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.userId} </p>
        <div className="field">
          <label>UserId</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.userId} </p>
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default CoachLogin;
