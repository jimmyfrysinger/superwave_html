//react
import React, { useEffect } from "react";
import Nav from "./Nav";

//images
import logo from "../images/superwave-logo.svg";

const Home = () => {
  useEffect(() => {
    let htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.remove(...htmlTag.classList);
  });
  return (
    <section id="homeCenterContainer">
      <img src={logo} alt="" id="homeLogo" />
      <Nav />
    </section>
  );
};

export default Home;
