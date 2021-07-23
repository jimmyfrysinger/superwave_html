//react
import React, { useState } from "react";

//components
import LeftDetails from "../components/LeftDetails";
import RightAboutTeam from "../components/RightAboutTeam";
import Controls from "../components/Controls";

//data
import { dataAbout } from "../data/DataAbout";

const About = ({ match }) => {
  const [heading, setHeading] = useState(dataAbout[0]["heading"]);
  const [text, setText] = useState(dataAbout[0]["text"]);
  const contactUsBtn = "true";

  return (
    <div id="about">
      <div key="" className="container">
        <LeftDetails data={{ heading, text, contactUsBtn }} />
        <RightAboutTeam
          setHeading={setHeading}
          setText={setText}
          match={match}
        />
      </div>
      <Controls />
    </div>
  );
};

export default About;
