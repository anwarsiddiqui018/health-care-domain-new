import React from "react";

const Card = ({ title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      {/* Additional card content can be added here */}
    </div>
  );
};

export default Card;
