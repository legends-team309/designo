/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";

const Sections = ({title , image , text}) => {
    return (
        <div className="sections">
            <img src={image}  className="sec-img" alt="SVG Image"/>
            <h4 className="sec-title">{title}</h4>
            <p className="sec-p">{text}</p>
        </div>
    );
}
export default Sections;