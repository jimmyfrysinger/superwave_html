//react
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, href, text }) => {
  return (
    <>
      {link ? (
        <Link to={link} className="btn">
          {text}
        </Link>
      ) : (
        <a href={href} className="btn">
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
