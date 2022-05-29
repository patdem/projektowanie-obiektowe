import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

function Welcome() {
  const [cookies] = useCookies(["email"]);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (cookies.email === undefined) {
      setUser("");
    } else {
      setUser("You are log in as: " + cookies.email);
    }

  }, [cookies.email]);

  return (
    <div className="bg-info">
      <h1>Welcome in the shop!</h1>
      <p>{user}</p>
    </div>
  );
}

export default Welcome;