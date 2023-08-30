import React from 'react'
import "./About.scss"
import {motion} from 'framer-motion'
import {Images} from "../../constants"

export default function About() {

  const abouts = [
    { title: "Web Development", description: 'I am a good web developer', imgUrl: Images.about01},
    { title: "Web Design", description: 'I am a good web developer', imgUrl: Images.about02},
    { title: "UI/UX", description: 'I am a good web developer', imgUrl: Images.about03},
    { title: "Web Animations", description: 'I am a good web developer', imgUrl: Images.about04},
  ];

  return (
    <div className='app__about'>
      <h2 className='head-text'>I Know That <span>Good Dev</span><br /> means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title+index}
          >
            <img src={about.imgUrl} alt="" />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div> 
    </div>
  )
}
