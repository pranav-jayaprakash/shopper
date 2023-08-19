import React from "react";
import "./Mainall.css";

function MainNav({size,setshow}) {
  return (
    <div>

      <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={()=>setshow(true)}><img src="https://seeklogo.com/images/S/shopee-logo-065D1ADCB9-seeklogo.com.png" alt="" className="sizer"/></span>
      </div>
      <div className="cart" onClick={()=>setshow(false)}>
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
