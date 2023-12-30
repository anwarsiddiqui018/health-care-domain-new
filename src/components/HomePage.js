import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickCoachLogin = () => {
    navigate("/coachlogin");
  };
  const handleClickCoachSignup = () => {
    navigate("/coachsignup");
  };
  const handleClickUserLogin = () => {
    navigate("/userlogin");
  };
  const handleClickUserSignup = () => {
    navigate("/usersignup");
  };

  return (
    <>
      <h1>We are at the heart of appropriate care</h1>
      <button type="button" onClick={handleClickCoachLogin}>
        Login as Coach
      </button>
      <button type="button" onClick={handleClickCoachSignup}>
        Join as a Coach
      </button>
      <button type="button" onClick={handleClickUserLogin}>
        Login as a User
      </button>
      <button type="button" onClick={handleClickUserSignup}>
        Join as a User
      </button>
    </>
  );
};
export default HomePage;
