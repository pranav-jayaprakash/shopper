import React, { useState } from "react";
import "./Mainall.css";

function Maincart({ cart, setcart }) {
  const [price, setprice] = useState(0);
  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
            <div className="cart_img">
                <img src={item.images[0]} alt="" />
                <p>{item.title}</p>
            </div>
            <div>
              <button>+
              </button>
              <button>-
              </button>
            </div>
            <div><span>{item.price}</span>
            <button>Remove</button></div>
        </div>
      ))}

      <div>
        <span>Total Price of your cart</span>
        <span>in Dollars = {price}</span>
      </div>
    </article>
  );
}

export default Maincart;
