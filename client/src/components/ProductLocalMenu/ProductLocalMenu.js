import React from "react";
import { connect } from "react-redux";
import { fetchProdByCat } from "../../store/actions";
import { Link } from "react-router-dom";

import "./ProductLocalMenu.css";


const ProductLocalMenu = ({fetchProdByCat}) => {

  const categories = ["pants", "tops", "shirts", "sale", "t-Shirts", "coats","jackets", "overalls"]

  const handleCategoryClick = (cat) => {
    console.log(cat)
    fetchProdByCat(cat)
  }
  
  return (
    <div className='local_menu-wrapper'>
      <div className='local_menu grid-row'>
        <div className='local_menu grid-col col-lg-12'>
          <div>
            <div className='sticky-outer-wrapper'>
              <div className='sticky-inner-wrapper'>
                <div className='sticky-menu container fixed-fluid'>
                  <div className='sub-menu'>
                     <ul className='sub-menu-list'>
                        {categories.map((cat, idx) => {
                          return <li key={idx}><Link onClick={() => handleCategoryClick(cat)} to={ `/product/list/` + cat}>{cat}</Link></li> })
                        }
                     </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products: { products } }) => {
  return { products }
}

export default connect(mapStateToProps, { fetchProdByCat })(ProductLocalMenu)
