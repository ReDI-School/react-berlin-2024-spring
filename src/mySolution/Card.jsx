import React from "react";

function Card({ risottoImage }) {
  return (
    <div>
      <h3>Risotto</h3>
      <img src={risottoImage} alt="Risotto" />
      <button>Add To Cart</button>
    </div>
  );
}

export default Card;
