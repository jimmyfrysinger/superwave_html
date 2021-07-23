//react
import React from "react";

//components
import LeftDetails from "../components/LeftDetails";
import RightContact from "../components/RightContact";
import Controls from "../components/Controls";

//data
import { dataContact } from "../data/DataContact";

const Contact = () => {
  const heading = dataContact[0]["heading"];
  const text = dataContact[0]["text"];
  return (
    <div id="contact">
      <div key="" className="container">
        <LeftDetails data={{ heading, text }} />
        <RightContact />
      </div>
      <Controls />
    </div>
  );
};

export default Contact;
