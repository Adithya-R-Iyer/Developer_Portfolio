import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { MotionWrap, AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = ()=> {
  
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(()=>{
    const query = '*[_type=="experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data)=>{
      // console.log(data);
      setExperiences(data);
    })

    client.fetch(skillsQuery).then((data)=>{
      setSkills(data);
    })
    
  },[])
  let toolTipClassNames;

  return (
    <div className='app__skills'>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill)=>(
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div> 
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences?.map((experience)=>(
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {toolTipClassNames = experience?.works?.map((work) => `.${`select-${work.name}`}`).join(' ')} */}
                {experience?.works?.map((work, index)=>(
                  <div key={index}>
                    <motion.div
                      whileInView={{opacity:[0,1]}}
                      transition={{duration: 0.5}}
                      className={`app__skills-exp-work class_${index}`}
                      data-tip={`tip_${index}`}
                      data-for={`tooltip_${index}`}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      anchorSelect={`.class_${index}`}
                      id={`tooltip_${index}`}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      place="top"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills,"app__skills"), "skills", "container-bg");
