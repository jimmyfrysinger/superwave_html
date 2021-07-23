//react
import React from "react";
import { Link } from "react-router-dom";

const Controls = ({ prev, next, setCurrentJob, setClass }) => {
  const clearBG = () => {
    let htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.remove(...htmlTag.classList);
  };
  return (
    <>
      {prev && next ? (
        <>
          <Link
            to={prev}
            className={setClass ? setClass + " pager" : "pager"}
            id="pager-prev"
          >
            <svg
              width="36px"
              height="67px"
              viewBox="0 0 36 67"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Welcome"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-1377.000000, -1502.000000)"
                  stroke="#000000"
                  strokeWidth="4"
                >
                  <g id="Cascade" transform="translate(0.000000, 1024.000000)">
                    <g id="next" transform="translate(1340.000000, 0.000000)">
                      <g
                        id="arrow"
                        transform="translate(54.853553, 511.646447) rotate(-315.000000) translate(-54.853553, -511.646447) translate(22.353553, 479.146447)"
                      >
                        <line
                          x1="6.98097039"
                          y1="6.09871939"
                          x2="36.9809704"
                          y2="37.0987194"
                          id="Line-2"
                          transform="translate(21.980970, 21.598719) rotate(315.000000) translate(-21.980970, -21.598719) "
                        ></line>
                        <line
                          x1="58.5477272"
                          y1="28.1654762"
                          x2="28.5477272"
                          y2="58.1654762"
                          id="Line-2"
                          transform="translate(43.547727, 43.165476) rotate(315.000000) translate(-43.547727, -43.165476) "
                        ></line>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            to={next}
            className={setClass ? setClass + " pager" : "pager"}
            id="pager-next"
          >
            <svg
              width="36px"
              height="67px"
              viewBox="0 0 36 67"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Welcome"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-1377.000000, -1502.000000)"
                  stroke="#000000"
                  strokeWidth="4"
                >
                  <g id="Cascade" transform="translate(0.000000, 1024.000000)">
                    <g id="next" transform="translate(1340.000000, 0.000000)">
                      <g
                        id="arrow"
                        transform="translate(54.853553, 511.646447) rotate(-315.000000) translate(-54.853553, -511.646447) translate(22.353553, 479.146447)"
                      >
                        <line
                          x1="6.98097039"
                          y1="6.09871939"
                          x2="36.9809704"
                          y2="37.0987194"
                          id="Line-2"
                          transform="translate(21.980970, 21.598719) rotate(315.000000) translate(-21.980970, -21.598719) "
                        ></line>
                        <line
                          x1="58.5477272"
                          y1="28.1654762"
                          x2="28.5477272"
                          y2="58.1654762"
                          id="Line-2"
                          transform="translate(43.547727, 43.165476) rotate(315.000000) translate(-43.547727, -43.165476) "
                        ></line>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </>
      ) : null}

      <Link
        to="/"
        className={setClass ? setClass + " close" : "close"}
        onClick={() => clearBG()}
      >
        <svg
          width="76px"
          viewBox="0 0 79 79"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Welcome"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD"
              transform="translate(-118.000000, -4115.000000)"
              stroke="#000000"
            >
              <g id="About" transform="translate(0.000000, 4096.000000)">
                <g
                  id="Close"
                  transform="translate(157.500000, 58.500000) rotate(-315.000000) translate(-157.500000, -58.500000) translate(130.000000, 31.000000)"
                >
                  <circle
                    id="Oval"
                    strokeWidth="2"
                    cx="27.5"
                    cy="27.5"
                    r="26.5"
                  ></circle>
                  <line
                    x1="12"
                    y1="27.5"
                    x2="42"
                    y2="27.5"
                    id="Line-2"
                    strokeWidth="3"
                    strokeLinecap="square"
                  ></line>
                  <line
                    x1="27.5"
                    y1="13"
                    x2="27.5"
                    y2="43"
                    id="Line-2"
                    strokeWidth="3"
                    strokeLinecap="square"
                  ></line>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </>
  );
};

export default Controls;
