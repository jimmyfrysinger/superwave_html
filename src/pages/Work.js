//react
import React, { useState, useEffect } from "react";

//components
import LeftDetails from "../components/LeftDetails";
import RightWorkPhoto from "../components/RightWorkPhoto";
import Controls from "../components/Controls";

//data
import { dataWork } from "../data/DataWork";

const Work = ({ match }) => {
  const [currentJob, setCurrentJob] = useState(1);
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const job = dataWork.filter((id) => Object.values(id).includes(currentJob));
  const totalJobsCount = dataWork.length;

  const heading1 = job[0].heading1,
    heading2 = job[0].heading2,
    text = job[0].text,
    img = job[0].img,
    btnTxt = job[0].btnTxt,
    btnLink = job[0].btnLink,
    btnHref = job[0].btnHref,
    btnTarget = job[0].btnTarget;

  const clean = (string) => {
    return string
      .replace(/(<([^>]+)>)/gi, "")
      .replace(/[^A-Z0-9]/gi, "")
      .toLowerCase();
  };

  let heading = heading1 + "<br />" + heading2;

  const currentClass = clean(heading1 + heading2);

  useEffect(() => {
    let htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.remove(...htmlTag.classList);
    htmlTag.classList.add(currentClass);
    htmlTag.classList.add("workBg");

    currentJob === totalJobsCount
      ? setNext(clean(dataWork[0].heading1 + dataWork[0].heading2))
      : setNext(
          clean(dataWork[currentJob].heading1 + dataWork[currentJob].heading2)
        );

    currentJob === 1
      ? setPrev(
          clean(
            dataWork[totalJobsCount - 1].heading1 +
              dataWork[totalJobsCount - 1].heading2
          )
        )
      : setPrev(
          clean(
            dataWork[currentJob - 2].heading1 +
              dataWork[currentJob - 2].heading2
          )
        );

    const {
      params: { id },
    } = match;

    if (id) {
      let work = dataWork.filter(
        (job) => clean(job.heading1 + job.heading2) === id
      );
      if (work.length) {
        setCurrentJob(work[0].id);
      }
    } else {
      setCurrentJob(1);
    }
  }, [currentJob, totalJobsCount, match]);

  return (
    <div id="work">
      <div key={job.id} className="container">
        <LeftDetails
          data={{
            heading,
            text,
            btnTxt,
            btnLink,
            btnHref,
            btnTarget,
          }}
        />
        <RightWorkPhoto src={img} />
      </div>
      <Controls prev={prev} next={next} setCurrentJob={setCurrentJob} />
    </div>
  );
};

export default Work;
