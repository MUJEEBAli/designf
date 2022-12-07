import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header_content">
        <h1 className="gradient__text">
          let's Buliding Somthing Amazing with GPT-3 Open API
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea
          neque illo non labore deleniti ad. Fuga atque maiores optio
          voluptates? Odit eaque iure tenetur minus. Provident blanditiis
          possimus eaque.
        </p>
        <div className="gpt__header_content_input">
          <input type="email" placeholder="Your email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header_content_people">
          <img src={people} alt="Pople" />
          <p>1060 people request to access a visit last 24 hours </p>
        </div>
      </div>
      <div className="gpt__header_image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
