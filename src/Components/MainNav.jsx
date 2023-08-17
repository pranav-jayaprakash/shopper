import React from "react";
import "./Mainall.css";

function MainNav({size}) {
  return (
    <div>

      <nav>
      <div className="nav_box">
        <span className="my_shop"><img src="https://seeklogo.com/images/S/shopee-logo-065D1ADCB9-seeklogo.com.png" alt="" className="sizer"/></span>
      </div>
      <div className="cart">
        <span>
        <i className="fa fa-cart-plus"></i>
        </span>
        <span>{size}</span>
      </div>
      </nav>
    </div>
  );
}

export default MainNav;
