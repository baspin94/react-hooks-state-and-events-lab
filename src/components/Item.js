import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleCartClick() {
    setIsInCart(!isInCart);
  }

  const classNameText = isInCart ? "in-cart" : "";
  const cartButtonText = isInCart ? "Remove From Cart" : "Add To Cart";
  const cartButtonClass = isInCart ? "remove" : "add";

  return (
    <li className={classNameText}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartButtonClass} onClick={handleCartClick}>
        {cartButtonText}
      </button>
    </li>
  );
}

export default Item;
