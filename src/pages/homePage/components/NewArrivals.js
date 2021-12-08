import { useState, useEffect, useContext } from "react";
import { Card } from "components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
} from "assets";
import { Link } from "react-router-dom";
import { AppContext } from "context";

import classes from "./NewArrivals.module.scss";

const {
  heading,
  new_products_container,
  new_product_container,
  product_image,
  price_cart_container,
  price,
  cart_icon_container,
  cart_icon,
  arrow_icons_container,
  arrow_icon,
} = classes;

const newProducts = [
  { productName: "product1", productImage: product1, price: 75, count: 1 },
  { productName: "product2", productImage: product2, price: 75, count: 1 },
  { productName: "product3", productImage: product3, price: 75, count: 1 },
  { productName: "product4", productImage: product4, price: 40, count: 1 },
  { productName: "product5", productImage: product5, price: 105, count: 1 },
  { productName: "product6", productImage: product6, price: 60, count: 1 },
  { productName: "product7", productImage: product7, price: 55, count: 1 },
  { productName: "product8", productImage: product8, price: 90, count: 1 },
];

export const NewArrivals = () => {
  const { cart, setSelectedProduct } = useContext(AppContext);
  let cartItems = [];

  useEffect(() => {
    if (cart.items.length > 0) {
      for (let x = 0; x < cart.items.length; x++) {
        cartItems = [...cartItems, cart.items[x].productName];
      }
    }
  }, [cart]);

  return (
    <div>
      <h2 className={heading}>New Arrivals</h2>
      <div className={new_products_container}>
        {newProducts.map((item, index) => (
          <span key={index}>
            <Card style={{ maxWidth: "14rem", maxHeight: "16rem" }}>
              <div className={new_product_container}>
                <Link
                  to={`product/${item.productName}`}
                  style={{ textDecoration: "none" }}
                  className={product_image}
                  onClick={() => {
                    setSelectedProduct({
                      ...item,
                      productImage: item.productImage,
                    });
                  }}
                >
                  <img
                    src={item.productImage}
                    alt={`Product Image - ${item.pruduct}`}
                  />
                </Link>

                <div className={price_cart_container}>
                  <div className={price}>Price: {item.price} USD </div>
                  <span className={cart_icon_container}>
                    <ShoppingCartIcon
                      className={cart_icon}
                      onClick={() => {
                        if (!cartItems.includes(item.productName)) {
                          cart.addItemToCart({
                            ...item,
                          });
                        }
                      }}
                    />
                  </span>
                </div>
              </div>
            </Card>
          </span>
        ))}
      </div>
      <div className={arrow_icons_container}>
        <ArrowForwardIcon className={arrow_icon} />
        <ArrowBackIcon className={arrow_icon} />
      </div>
    </div>
  );
};
