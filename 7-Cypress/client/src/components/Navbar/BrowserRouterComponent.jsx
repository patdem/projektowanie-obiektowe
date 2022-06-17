import {BrowserRouter} from "react-router-dom";
import {NavTab} from "./NavTab";
import {NavSwitch} from "./NavSwitch";

export const BrowserRouterComponent = () => {
  return (
    <BrowserRouter>
      <NavTab/>
      <NavSwitch/>
    </BrowserRouter>
  );
}

