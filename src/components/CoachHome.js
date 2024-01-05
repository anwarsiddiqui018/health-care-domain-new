import useCoachHome from "../utils/useCoachHome";

const CoachHome = () => {
  const coachData = useCoachHome();

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
