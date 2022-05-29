import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import product from "../../img/product.svg";
import Button from "react-bootstrap/Button";
import {CartContext} from "../../contexts/CartContext";
import {CategoryContext} from "../../contexts/CategoryContext";

const CartProduct = (props) => {
  const context = useContext(CartContext);
  const categories = useContext(CategoryContext);
  const cat = categories[props.category - 1];

  return (
    <Card
      style={{width: '20rem', marginRight: "auto", marginLeft: "auto", marginTop: 10, marginBottom: 10, padding: 20}}>
      <Card.Img variant="top" src={product}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>({props.quantity})</Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          <small className="text-muted">{cat}</small>
        </Card.Text>
        <Button variant="danger" onClick={context.removeProductFromCart.bind(this, props.id)}>Remove from cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CartProduct;
