import Products from "../Products/Products";
import "./Category.scss";


// import cat1 from "../../assets/category/cat-1.jpg";

const Category = () => {
  return(
    <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                Category Title
                <Products innerPage={true} />
            </div>
        </div>
    </div>
  )
};

export default Category;
