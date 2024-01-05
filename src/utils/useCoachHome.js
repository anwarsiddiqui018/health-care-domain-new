import { useState, useEffect } from "react";

const useCoachHome = () => {
  const [coachInfo, setCoachInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/bookings");
    const data = await response.json();
    setCoachInfo(data);
  };
  return coachInfo;
};

export default useCoachHome;
