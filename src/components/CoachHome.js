import { useEffect, useState } from "react";

const CoachHome = () => {
  const [coachData, setCoachData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/bookings");
    const data = await response.json();
    setCoachData(data);
  };

  return (
    <div className="CoachHome">
      {coachData?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        coachData?.map((item) => (
          <div key={item.id}>
            <p>Appointment Date: {item.appointmentDate}</p>
            <p>Slot: {item.slot}</p>
            <p>User ID: {item.userId}</p>
            <p>Coach ID: {item.coachId}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CoachHome;
