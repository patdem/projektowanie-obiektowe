import React, {useContext} from 'react';
import Product from "./Product";
import {ProductContext} from "../../contexts/ProductContext";

function ProductsList() {
  let {products} = useContext(ProductContext);

  return (
    <div>
      <div className="bg-info bg-gradient">
        <h1>Products</h1>
        {products.map((prod) => (
          <Product
            id={prod.id}
            name={prod.name}
            description={prod.description}
            category={prod.category}
            key={prod.id}
          />
        ))
        }
      </div>
    </div>
  );
}

export default ProductsList;