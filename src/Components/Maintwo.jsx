import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Mainall.css";

import axios from "axios";

function Maintwo({ handleClick }) {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((display) => {
      setfirst(display.data.products);
    });
  }, []);

  return (
    <div className="border">
      <MDBRow className="row-cols-1 row-cols-md-5 g-4">
        {first.map((display) => (
          <MDBCol>
            <MDBCard className="h-100" >
              <MDBCardImage src={display.images[0]} position="top" alt="..." />
              <MDBCardBody >
                <MDBCardTitle>{display.title}</MDBCardTitle>
                <MDBCardText>{display.brand}</MDBCardText>
                <MDBCardText>${display.price}</MDBCardText>
                <MDBBtn color="warning" onClick={() => handleClick(display)}>
                  ADD TO CART
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}

export default Maintwo;
