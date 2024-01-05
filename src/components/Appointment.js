import { useRef, useState } from "react";
import axios from "axios";

const Appointment = () => {
  const url = "http://localhost:8080/bookings";
  const [formData, setFormData] = useState({
    appointmentDate: "",
    slot: "",
  });

  const dateInputRef = useRef(null);

  // const [formErrors, setFormErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    // Additional validation for the date
    if (name === "appointmentDate") {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(currentDate.getDate() + 7);

      // Check if the selected date is ahead of today and within the next seven days
      if (selectedDate >= currentDate && selectedDate <= sevenDaysLater) {
        setFormData((prev) => {
          return { ...prev, [name]: value };
        });
      } else {
        // Optionally, you can display an error message or handle invalid date
        console.log("Invalid date selection");
      }
    } else if (name === "slot") {
      setFormData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);

    axios
      .post(url, {
        appointmentDate: formData.appointmentDate,
        slot: formData.slot,
      })
      .then((res) => {
        console.log("res", res.data); // Assuming the response contains useful data
      });
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
          {/* <span className="non-valid"> {formErrors.gender}</span> */}
        </div>
        <div>
          {console.log("formData", formData)}
          <button disabled={!formData.appointmentDate || !formData.slot}>
            Confirm Your Appointment
          </button>
        </div>
      </form>
    </>
  );
};

export default Appointment;
