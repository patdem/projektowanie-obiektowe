import React, {createContext, useEffect, useState} from 'react';
import CategoryService from "../services/CategoryService";

export const CategoryContext = createContext();

const CategoryContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const data = await CategoryService.getCategories();
    console.log(data);
    setCategories(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CategoryContext.Provider value={{categories}}>
      {children}
    </CategoryContext.Provider>
  );

}

export default CategoryContextProvider