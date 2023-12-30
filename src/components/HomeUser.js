import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeUser = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/coaches");
    const data = await response.json();
    setUserData(data);
  };
  return (
    <div className="HomeUser">
      {userData.map((item) => (
        <div key={item.id}>
          <p> UserId : {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Mobile Number:{item.mobileNumber}</p>
          <p>Speciality: {item.speciality}</p>
          <Link to="/appointment">Book An Appointment</Link>
        </div>
      ))}
    </div>
  );
};
export default HomeUser;
