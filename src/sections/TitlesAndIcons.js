import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesAndIcons.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1 className="title">{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>

          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("im h")}
          />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitlesAndIcons;
