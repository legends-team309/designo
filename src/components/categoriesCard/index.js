import React from "react";
import "./style.css";
const CategoriesCard = ({ title, image }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>{title}</h2>
      <p>view project</p>
    </div>
  );
};
export default CategoriesCard;
