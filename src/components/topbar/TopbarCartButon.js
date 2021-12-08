import { useState, useEffect, useContext } from "react";
import { AppContext } from "context";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import classes from "./TopbarCartButton.module.scss";

const { cart_button, bump, icon, badge } = classes;

export const TopbarCartButton = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { cart } = useContext(AppContext);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }, [cart]);

  // console.log(showCart);

  return (
    <button
      className={`${cart_button} ${loaded && bump} `}
      // onClick={() => setShowCart(true)}
    >
      <ShoppingCartOutlinedIcon className={icon} />
      <span className={badge}>{cart.items.length}</span>
    </button>
  );
};
