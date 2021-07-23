//react
import React from "react";
import { Link } from "react-router-dom";

const LeftDetails = ({ data }) => {
  return (
    <>
      <section className="leftDetails">
        <h1 dangerouslySetInnerHTML={{ __html: data.heading }}></h1>
        <p>{data.text}</p>
        {data.contactUsBtn ? (
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        ) : null}
        {data.btnTxt && data.btnHref ? (
          <a href={data.btnHref} target={data.btnTarget} className="btn">
            {data.btnTxt}
          </a>
        ) : null}
      </section>
    </>
  );
};

export default LeftDetails;
