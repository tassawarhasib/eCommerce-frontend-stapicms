import "./Category.scss";
// import cat1 from "../../../assets/category/cat-1.jpg";
// import { useEffect, useState } from "react";

const Category = ({ categories }) => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((item) => (item.attributes.img.data.map((imgItem) => (
          <div key={imgItem}>
            <img src={process.env.REACT_APP_DEV_URL + imgItem.attributes.url} alt="categories image" />
          </div>
        )
        )))}
      </div>
    </div >
  );
};

export default Category;

{/* <div className="categories">
        {categories && categories.data ? (
          categories.data.map((Object) => (
            <div key={Object.id} className="categor">
              {Object.attributes.img && Object.attributes.img.data && Object.data.attributes.img.data.attributes.url ? (
                <img src={process.env.REACT_APP_DEV_URL + Object.data.attributes.img.data.attributes.url} alt="" />
              ) : (
                <p>Image not available</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

      </div> */}