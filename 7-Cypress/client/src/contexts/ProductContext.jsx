import React, {createContext, useEffect, useState} from 'react';
import ProductService from "../services/ProductService";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await ProductService.getProducts();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );

}

export default ProductContextProvider