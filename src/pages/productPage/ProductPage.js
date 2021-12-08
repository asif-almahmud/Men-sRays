import { useState, useEffect, useContext } from "react";
import { Layout } from "layout";
import { Card } from "components";
import classes from "./ProductPage.module.scss";
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
import { AppContext } from "context";

const {
  product_details_container,
  product_details_top_section,
  product_small_images,
  product_small_image,
  product_large_image,
  product_specification_container,
  product_description,
} = classes;

export const ProductPage = () => {
  const { cart, selectedProduct } = useContext(AppContext);
  let cartItems = [];

  console.log(selectedProduct);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cart.items.length > 0) {
      for (let x = 0; x < cart.items.length; x++) {
        cartItems = [...cartItems, cart.items[x].productName];
      }
    }
  }, [cart]);

  return (
    <Layout>
      <div className={product_details_container}>
        <div className={product_details_top_section}>
          <div className={product_small_images}>
            <div className={product_small_image}>
              <img
                src={selectedProduct.productImage}
                alt="Product type 1"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className={product_small_image}>
              <img
                src={selectedProduct.productImage}
                alt="Product type 2"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className={product_small_image}>
              <img
                src={selectedProduct.productImage}
                alt="Product type 3"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className={product_large_image}>
            <img
              src={selectedProduct.productImage}
              alt={`${selectedProduct.productName}`}
            />
          </div>
          <div className={product_specification_container}>
            <div style={{ margin: "2px", fontWeight: "400" }}>
              <div style={{ margin: "2px", fontWeight: "600" }}>
                Product Specification
              </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              adipisci cupiditate consequuntur maxime officia sed quasi illo?
              Accusamus deleniti ullam obcaecati tempore iste id repudiandae
              officia, dolorem voluptatibus, sit quod deserunt.
            </div>
            <br />
            <div style={{ margin: "2px", fontWeight: "600" }}>
              Price: <span>{selectedProduct.price} USD</span>
            </div>
            <br />
            <div style={{ margin: "2px", fontWeight: "600" }}>Varities:</div>
            <div style={{ margin: "2px", fontWeight: "400" }}>
              <button
                style={{
                  margin: "2px",
                  marginLeft: "0px",
                  padding: "2px",
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "white",
                  background: "#777",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Black
              </button>
              <button
                style={{
                  margin: "2px",
                  padding: "2px",
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "white",
                  background: "#777",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Blue
              </button>
              <button
                style={{
                  margin: "2px",
                  padding: "2px",
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "white",
                  background: "#777",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                White
              </button>
            </div>
            <br />
            <div style={{ margin: "2px", fontWeight: "300", fontSize: "14px" }}>
              Delivery within 7 days.
            </div>
            <br />
            <button
              style={{
                margin: "2px",
                padding: "4px",
                fontSize: "14px",
                fontWeight: "400",
                color: "white",
                background: "#477",
                borderRadius: "3px",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={() => {
                if (!cartItems.includes(selectedProduct.productName)) {
                  cart.addItemToCart({
                    ...selectedProduct,
                  });
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>

        <div className={product_description}>
          <div style={{ margin: "2px", marginLeft: "0px", fontWeight: "600" }}>
            Product Description
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
            esse deserunt necessitatibus facere inventore accusamus odio, iusto,
            consectetur fugiat cupiditate ipsum doloribus possimus quos. Earum
            dolorum ducimus expedita praesentium perspiciatis odit ab fugit
            quisquam? Nisi placeat eaque aliquam error asperiores nobis maxime,
            neque modi laborum tempore velit eum deserunt, ea blanditiis dolor?
            Non ullam ab neque sequi asperiores nam, tempora, quae perspiciatis
            voluptates rerum voluptatibus qui ut id, aliquam eveniet? Odit
            voluptas totam architecto soluta maiores eius sequi inventore
            tenetur. Incidunt eaque nihil alias voluptatum perspiciatis, cumque
            ullam ea quas? Veritatis in quas adipisci laboriosam quis nihil,
            explicabo enim error velit at fuga, ab omnis tempore ducimus quam ex
            maiores debitis tempora nulla magnam praesentium? Corporis nulla
            similique unde? Corporis fugiat porro ipsa? Nam deserunt nihil vitae
            perferendis, mollitia esse beatae iste quaerat, repellendus illum
            eligendi architecto voluptatibus excepturi id repudiandae vel
            impedit ipsam magnam placeat iure quasi reiciendis!
          </div>
        </div>
      </div>
    </Layout>
  );
};
