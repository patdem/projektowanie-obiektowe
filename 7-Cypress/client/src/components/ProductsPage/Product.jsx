import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useContext} from "react";
import product from "../../img/product.svg";
import {CartContext} from "../../contexts/CartContext";
import {CategoryContext} from "../../contexts/CategoryContext";

const Product = (props) => {
  const context = useContext(CartContext);
  const categories = useContext(CategoryContext);
  const cat = categories[props.category - 1];

  return (
    <Card id={props.name} style={{
      width: '20rem', marginRight: "auto", marginLeft: "auto", marginTop: 10, marginBottom: 10,
      padding: 20
    }}>
      <Card.Img variant="top" src={product}/>
      <Card.Body>
        <Card.Title id={props.name}>{props.name}</Card.Title>
        <Card.Text id={props.name}>
          {props.description}
        </Card.Text>
        <Card.Text>
          <small className="text-muted">{cat}</small>
        </Card.Text>
        <Button id={props.name} variant="primary" onClick={context.addProductToCart.bind(this, {
          id: props.id,
          name: props.name,
          description: props.description,
          category: props.category
        })}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;