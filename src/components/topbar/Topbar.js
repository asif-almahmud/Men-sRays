import { useContext } from "react";
import { AppContext } from "context";
import { Item } from "components";
import { TopbarCartButton } from "./TopbarCartButon";
import { Link } from "react-router-dom";

import classes from "./Topbar.module.scss";

const {
  topbar_container_big_screen,
  topbar_container_small_screen,
  topbar_logo,
  topbar_navigation,
  items_container,
  cart,
  topbar_logo_cart,
  hide_items,
} = classes;

const items = ["Shirts", "T-Shirts", "Polos", "Hoodies", "Punjabis"];

export const Topbar = () => {
  const { showCart, setShowCart } = useContext(AppContext);
  return (
    <>
      <div className={topbar_container_big_screen}>
        <Link to="/" style={{ textDecoration: "none" }} className={topbar_logo}>
          Men'sRays
        </Link>
        <div className={topbar_navigation}>
          <div className={items_container}>
            {items.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </div>
          <div className={cart} onClick={() => setShowCart(!showCart)}>
            <TopbarCartButton />
          </div>
        </div>
      </div>
      <div className={topbar_container_small_screen}>
        <div className={topbar_logo_cart}>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={topbar_logo}
          >
            Men'sRays
          </Link>

          <Link to="/cart">
            <div className={cart}>
              <TopbarCartButton />
            </div>
          </Link>
        </div>

        <div className={items_container}>
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </div>
      </div>
    </>
  );
};
