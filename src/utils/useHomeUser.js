import { useEffect, useState } from "react";

const useHomeUser = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/coaches");
    const data = await response.json();
    console.log("data", data);
    setUserInfo(data);
  };

  return userInfo;
};

export default useHomeUser;
