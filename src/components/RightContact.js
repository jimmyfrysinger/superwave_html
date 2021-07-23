// react
import React from "react";
import { ContactFormHook } from "../hooks/ContactFormHook";

const RightContact = () => {
  ContactFormHook();
  return (
    <section className="rightDetails">
      <form
        method="POST"
        className="gform"
        action="https://script.google.com/macros/s/AKfycbwO4Q41kupm8bC7Cg0yzGncSwRbGthiNf3_iWyqpg/exec"
      >
        <input
          placeholder="Your name"
          name="Name"
          type="text"
          required="required"
          className="input form-element"
        />
        <br />
        <input
          placeholder="Email address"
          name="Email"
          type="email"
          required="required"
          className="input form-element"
        />
        <br />
        <textarea
          placeholder="Message"
          name="Message"
          required="required"
          className="textarea form-element"
        />
        <br />
        <button className="btn">Contact Us</button>
      </form>
      <div style={{ display: "none" }} className="thankyou_message">
        <h2>Message sent</h2>
        <p>Thanks for contacting us! We will get back to you shortly.</p>
      </div>
    </section>
  );
};

export default RightContact;
