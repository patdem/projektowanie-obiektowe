import './App.css';
import ProductContextProvider from "./contexts/ProductContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import {BrowserRouterComponent} from "./components/Navbar/BrowserRouterComponent";
import {CookiesProvider} from "react-cookie";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App bg-success">
      <CookiesProvider>
        <ProductContextProvider>
          <CategoryContextProvider>
            <CartContextProvider>
              <BrowserRouterComponent/>
            </CartContextProvider>
          </CategoryContextProvider>
        </ProductContextProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
