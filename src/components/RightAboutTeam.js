//react
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//data
import { dataAboutTeam } from "../data/DataAboutTeam";

const RightAboutTeam = ({ setHeading, setText, match }) => {
  const showBio = (id) => {
    let className = "current";
    window.scrollTo(0, 0);
    let current = document.getElementsByClassName(className);
    if (current.length) {
      current[0].classList.remove(className);
    }
    document.getElementsByClassName(id)[0].classList.add(className);
  };
  useEffect(() => {
    const {
      params: { id },
    } = match;
    console.log(id);

    if (id) {
      let member = dataAboutTeam.filter(
        (person) => person.nameFirst.toLowerCase() === id
      );

      if (member.length) {
        setHeading(member[0].nameFirst + "<br />" + member[0].nameLast);
        setText(member[0].text);

        showBio(id);
      }
    }
  });
  return (
    <>
      <section id="rightAboutTeamContainer" className="rightDetails">
        {dataAboutTeam.map((about) => {
          return (
            <Link
              to={"/about/" + about.nameFirst.toLowerCase()}
              className={"teamMemberTile " + about.nameFirst.toLowerCase()}
              key={about.id}
            >
              <article>
                <img src={about.img} alt="" />
                <div className="teamMemberDetails">
                  <h3>
                    {about.nameFirst} {about.nameLast}
                  </h3>
                  <p>{about.title}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default RightAboutTeam;
