import React, { useState } from "react";
// import moment from 'react-moment';
// import Axios from 'axios'

// const url = 'http://localhost:3000/bookings';

const Appointment = () => {
  // state variable holding the form values. When user enter the values the state gets updated
  const [details, setDetails] = useState({
    emailId: "",
    location: "",
    appointmentDate: "",
    // slot: '',
    //
  });
  //state variables for displaying validation errors for email and date
  const [formErrors, setFormErrors] = useState({});
  //state variable to display success message once the appointment is successfull
  const [successMessage, setSuccessMessage] = useState("");
  //state variable to display error message when there is some error
  const [errorMessage, setErrorMessgae] = useState("");
  //state variable to display the mandatory field error message
  const [mandatory, setMandatory] = useState(false);
  //state variable used to disable the button when any of the given form
  const [valid, setValid] = useState(true);

  //A collection of few messages that the component display.
  // whereever applicble, please use the following json to display the message

  const [messages] = useState({
    MANDATORY: "Enter all the form fields",
    ERROR: "Something went wrong",
    DATE_ERROR: "Date should be greate than todays date",
    EMAIL_ERROR: "Invalid email",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log("details", details);
    if (!details.emailId || !details.appointmentDate) {
      setMandatory(true);
    }
  };
  const handleChange = (event) => {
    setSuccessMessage("");
    setErrorMessgae("");
    setMandatory(false);

    let { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};
    switch (name) {
      case "emailId":
        if (!regex.test(value)) {
          setFormErrors(messages.EMAIL_ERROR);
        } else {
        }
        break;
      case "appointmentDate":
        let formdate = new Date(value);
        let todayDate = new Date();
        if (formdate.getDate() > todayDate.getDate) {
          errors.DATE_ERROR = "hello";
        }
        break;
      default:
        break;
    }
    if (Object.values(errors).every((value) => value === "")) {
      // console.log((Object.values(errors)))
      setValid(true);
    } else {
      setValid(false);
    }
    setFormErrors({ ...errors });
  };

  return (
    <React.Fragment>
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div
                className="card-header"
                style={{
                  backgroundColor: "rgba(0, 33, 65, 0, 0.651)",
                  color: "white",
                }}
              >
                <h6>Book an Appointment</h6>
              </div>
              <div className="card-body">
                {/* 1. Write code to render form as per screenshot 
                                2. Display successMessage or errorMessage after submission
                                3. Form Should be controlled
                                4. Event handling methods should be binded appropriately
                                5. Invoke the appropriate method on form submission using  */}
                <form
                  className="form"
                  data-testid="appointment-form"
                  onSubmit={submit}
                >
                  <div className="form-group">
                    <labe>Email Id</labe>
                    <input
                      data-testid="emailId"
                      type="text"
                      name="emailId"
                      className="form-control"
                      value={setDetails.emailId}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Check wheteher the email error is set if set display  */}
                  <span
                    data-testid="email-error"
                    className="text-danger"
                  ></span>
                  <div className="form-group">
                    <labe>Location</labe>
                    <select
                      autoFocus
                      name="location"
                      date-testid="location"
                      className="form-control"
                      value={setDetails.location}
                      onChange={handleChange}
                    >
                      <option value="">---Select---</option>
                      <option value="New York">New York </option>
                      <option value="Detroit">Detroit</option>
                      <option value="Manchestor">Manchestor</option>
                      <option value="Paris">Paris</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      name="appointmentDate"
                      className="form-control"
                      data-testid="appointmentDate"
                      value={setDetails.date}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Check whether the date error is set if set */}
                  <span data-testid="date-error" className="text-danger"></span>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-testid="button"
                    >
                      Submit
                    </button>
                    {/* Bind the disabled attribute to the button to */}
                  </div>
                </form>
              </div>
              {/* Using the concept of conditional rendering, display 
                            If the form fields are not entered then set the message */}
              <div data-testid="mandatory" className="text-danger">
                {mandatory}{" "}
              </div>

              <div data-testid="success" className="text-success"></div>

              <div data-testid="error" className="text-danger"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Appointment;
