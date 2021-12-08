import { useState, useEffect } from "react";
import { Layout } from "layout";
import { Banner, NewArrivals } from "./components";

export const HomePage = (props) => {
  return (
    <Layout>
      <Banner />
      <NewArrivals setProductSelected={props.setProductSelected} />
    </Layout>
  );
};
