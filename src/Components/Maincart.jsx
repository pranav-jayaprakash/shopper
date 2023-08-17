import React, { useState } from "react";
import "./Mainall.css";

function Maincart({ cart, setcart }) {
  const [price, setprice] = useState(0);
  return (
    <div>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
            <div className="cart_img">
                <img src={item.img} alt="" />
            </div>
        </div>
      ))}
    </div>
  );
}

export default Maincart;
