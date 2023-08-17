import React from "react";
import "./Mainall.css";

function MainNav() {
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
      </div>
      </nav>
    </div>
  );
}

export default MainNav;
