import {Route, Switch} from "react-router-dom";
import ProductsList from "../ProductsPage/ProductsList";
import Welcome from "../MainPage/Welcome";
import {LoginForm} from "../LoginPage/LoginForm";
import {Cart} from "../CartPage/Cart";

export const NavSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome/>
      </Route>
      <Route path="/product/list">
        <ProductsList/>
      </Route>
      <Route path="/login">
        <LoginForm/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </Switch>
  );
}