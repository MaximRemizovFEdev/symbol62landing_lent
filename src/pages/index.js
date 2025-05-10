import * as React from "react";
import HeaderScreen from "../components/HeaderScreen/HeaderScreen";
import "../components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Advantages from "../components/Advantages";
import PhotoSlider from "../components/PhotoSlider";
import Makets from "../components/Makets";
import Price from "../components/Price/Price";
import WorkSteps from "../components/WorkSteps";
import Workflow from "../components/Workflow";
import FAQ from "../components/FAQ";
import FaqHeader from "../components/FaqHeader";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <WorkSteps />
      <Workflow />
      <FaqHeader />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Символика - Ленты выпускника</title>;
