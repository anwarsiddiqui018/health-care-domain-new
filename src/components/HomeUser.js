import { Link } from "react-router-dom";
import useHomeUser from "../utils/useHomeUser";
import Appointment from "./Appointment";

const HomeUser = () => {
  const userData = useHomeUser();
  return (
    <div className="HomeUser">
      {userData.map((item) => (
        <div key={item.id}>
          <p> CoachID : {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Mobile Number:{item.mobileNumber}</p>
          <p>Speciality: {item.speciality}</p>
          <Link to="/appointment" state={{ data: item.id }}>
            Book An Appointment
          </Link>
        </div>
      ))}
    </div>
  );
};
export default HomeUser;
