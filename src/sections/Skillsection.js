import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import './Skillsection.css';

class Skillsection extends Component {
  render() {
    return (
      <Fullpage className="third">
               <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return (
              <SkillCard skill={eachskill}/>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default Skillsection;
