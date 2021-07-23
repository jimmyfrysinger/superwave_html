//react
import React from "react";
import { Link } from "react-router-dom";
import _JSXStyle from "styled-jsx/style";

//data
import { dataWork } from "../data/DataWork";

const Nav = () => {
  console.log(_JSXStyle);

  let firstWork = (dataWork[0].heading1 + dataWork[0].heading2).toLowerCase();

  return (
    <>
      <nav>
        <Link to="/about">About</Link>
        <Link to={"/work/" + firstWork}>Work</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-top: 70px;
          }
          nav :global(a) {
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 600;
            font-size: 3.95137vw;
            line-height: 3.1vw;
          }
          @media screen and (min-width: 658px) {
            nav :global(a) {
              font-size: 26px;
              line-height: 20px;
            }
          }
          @media screen and (max-width: 768px) {
            nav {
              flex-wrap: wrap;
              margin-top: 8vw;
            }
            nav :global(a) {
              font-size: 8vw;
              line-height: 8vw;
              width: 100%;
              text-align: center;
              margin-bottom: 8vw;
              font-weight: 400;
            }
          }
        `}
      </style>
    </>
  );
};

export default Nav;
