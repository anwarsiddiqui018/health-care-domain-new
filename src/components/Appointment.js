import { useRef, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state ? location.state.userId : null;

  const url = "http://localhost:8080/bookings";
  const [formData, setFormData] = useState({
    appointmentDate: "",
    slot: "",
    userId: userId,
  });
  const [formErrors, setFormErrors] = useState({});

  const dateInputRef = useRef(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "appointmentDate") {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(currentDate.getDate() + 7);

      if (selectedDate >= currentDate && selectedDate <= sevenDaysLater) {
        setFormErrors((prev) => ({ ...prev, appointmentDate: "" }));
        setFormData((prev) => ({ ...prev, [name]: value }));
      } else {
        setFormErrors((prev) => ({
          ...prev,
          appointmentDate: "Invalid date selection",
        }));
      }
    } else if (name === "slot") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);

    let isValid = validateForm();

    if (userId === null) {
      alert("Please log in to book an appointment.");
      navigate("/login");
      return;
    }

    if (isValid) {
      axios
        .post(url, {
          appointmentDate: formData.appointmentDate,
          slot: formData.slot,
          userId: formData.userId,
        })
        .then((res) => {
          console.log("res", res.data);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // Handle errors as needed
        });
    } else {
      console.log("Form submission failed");
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.appointmentDate) {
      errors.appointmentDate = "Date is required";
    } else {
      const selectedDate = new Date(formData.appointmentDate);
      const currentDate = new Date();
      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(currentDate.getDate() + 7);

      if (!(selectedDate >= currentDate && selectedDate <= sevenDaysLater)) {
        errors.appointmentDate = "Invalid date selection";
      }
    }

    if (!formData.slot) {
      errors.slot = "Slot is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="dateOfBirth">Date of Appointment</label>
          <input
            name="appointmentDate"
            type="date"
            onChange={onChangeHandler}
            ref={dateInputRef}
          />
        </div>
        <div>
          <div>
            <label htmlFor="slot" className="form-label">
              Preferred Slot
            </label>
            <div>
              <input
                type="radio"
                name="slot"
                value="9 AM to 10 AM"
                onChange={onChangeHandler}
                checked={formData.slot === "9 AM to 10 AM"}
              />
              <label htmlFor="slot">9 AM to 10 AM</label>
            </div>
            <div>
              <input
                type="radio"
                name="slot"
                value="10 AM to 11 AM"
                onChange={onChangeHandler}
                checked={formData.slot === "10 AM to 11 AM"}
              />
              <label htmlFor="slot">10 AM to 11 AM</label>
            </div>
            <div>
              <input
                type="radio"
                name="slot"
                value="11 AM to 12 PM"
                onChange={onChangeHandler}
                checked={formData.slot === "11"}
              />
              <label htmlFor="slot">11 AM to 12 PM</label>
            </div>
            <div>
              <input
                type="radio"
                name="slot"
                value="12 PM to 1 PM"
                onChange={onChangeHandler}
                checked={formData.slot === "12 PM to 1 PM"}
              />
              <label htmlFor="slot">12 PM to 1 PM</label>
            </div>
            <div>
              <input
                type="radio"
                name="slot"
                value="2 PM to 3 PM"
                onChange={onChangeHandler}
                checked={formData.slot === "2 PM to 3 PM"}
              />
              <label htmlFor="slot">2 PM to 3 PM</label>
            </div>
            <div>
              <input
                type="radio"
                name="slot"
                value="3 PM to 4 PM"
                onChange={onChangeHandler}
                checked={formData.slot === "3 PM to 4 PM"}
              />
              <label htmlFor="slot">3 PM to 4 PM</label>
            </div>
            <div>
              <input
                type="radio"
                name="slot"
                value="4 PM to 5 PM"
                onChange={onChangeHandler}
                checked={formData.slot === "4 PM to 5 PM"}
              />
              <label htmlFor="slot">4 PM to 5 PM</label>
            </div>
          </div>
          <p style={{ color: "red" }}>{formErrors.slot}</p>
        </div>
        <div>
          <button disabled={!formData.appointmentDate || !formData.slot}>
            Confirm Your Appointment
          </button>
          <p style={{ color: "red" }}>{formErrors.appointmentDate}</p>
        </div>
      </form>
    </>
  );
};

export default Appointment;
