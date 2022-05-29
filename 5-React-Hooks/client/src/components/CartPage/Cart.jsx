import React, {useContext} from "react";
import {CartContext} from "../../contexts/CartContext";
import CartProduct from "./CartProduct";
import Button from "react-bootstrap/Button";

export const Cart = props => {
  const context = useContext(CartContext);

  if (context.cart.length < 1) {
    return (
      <div>
        <div className="bg-info bg-gradient">
          <h1>Your cart</h1>
          <p>Cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-info bg-gradient">
        <h1>Your cart</h1>
        {context.cart.map(cartItem => (
          <CartProduct
            id={cartItem.id}
            name={cartItem.name}
            description={cartItem.description}
            category={cartItem.category}
            quantity={cartItem.quantity}
            key={cartItem.id}
          />
        ))}
        <Button variant="success">Go to checkout</Button>
      </div>
    </div>
  );
};
