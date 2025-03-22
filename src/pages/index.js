import * as React from "react";
import HeaderScreen from "../components/HeaderScreen";
import "../components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Advantages from "../components/Advantages";
import PhotoSlider from "../components/PhotoSlider";
import Makets from "../components/Makets";
import Price from "../components/Price";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <HeaderScreen />
      <Advantages />
      <PhotoSlider />
      <Makets />
      <Price />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
