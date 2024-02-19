import React, { useState } from "react";

const Category = (props) => {
  const [isHovered, setIsHovered] = useState("");
  return (
    <div className="category">
      <img
        src={
          isHovered
            ? props.categoryObj.secondPhoto
            : props.categoryObj.photoName
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt={props.name}
      ></img>
      {isHovered ? (
        <h3 className="green">{props.categoryObj.name}</h3>
      ) : (
        <h3
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          {props.categoryObj.name}{" "}
        </h3>
      )}
    </div>
  );
};

export default Category;
