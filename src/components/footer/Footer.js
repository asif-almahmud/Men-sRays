import React from "react";

import classes from "./Footer.module.scss";

const { footer_container, links, link_list_container, link_list, copiright } =
  classes;

export const Footer = () => {
  return (
    <div className={footer_container}>
      <div className={links}>
        <div className={link_list_container}>
          <h4>Company</h4>
          <div className={link_list}>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Intellectual Property</span>
          </div>
        </div>
        <div className={link_list_container}>
          <h4>Information</h4>
          <div className={link_list}>
            <span>Exchange & Return</span>
            <span>Size Guide</span>
            <span>Display Centers</span>
          </div>
        </div>
        <div className={link_list_container}>
          <h4>Legal</h4>
          <div className={link_list}>
            <span>Privacy Policy</span>
            <span>Payment Policy</span>
            <span>Shipping Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>

      <div className={copiright}>© 2021 Men'sRays. All rights reserved.</div>
    </div>
  );
};
