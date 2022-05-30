import React from "react";
import './style.css';
import CategoriesCard from "../categoriesCard";
import image1 from '../../assets/images/web-design.jpg';
import image2 from '../../assets/images/app-design.jpg';
import image3 from '../../assets/images/graphic-design.jpg';
// const image2 = require('../../assets/images/Img_2.png').default;

const Categories = () => {
  return (
    <div className="categories-sec">
      <div className="right">
        <CategoriesCard image={image1} title='web design'/>
      </div>
      <div className="left">
      <CategoriesCard image={image2} title='app design'/>
      <CategoriesCard image={image3} title='graphic design'/>
      </div>
    </div>
  );
}
export default Categories