import React from 'react'
import "./Header.scss"
import {AppWrap} from '../../wrapper'
import {motion} from 'framer-motion'
import {Images} from "../../constants"

const Header = ()=> {

  const scaleVariants = {
    whileInView : {
      scale:[0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100,0], opacity: [0,1]}}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className="badge-cmp">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
               <p className='p-text'>Hello, I am </p>
               <h1 className="head-text">Adithya Iyer</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web & App Developer</p>
            <p className='p-text'>Tech Enthusiast</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.5, delayChildren:0.5 }}
        className='app__header-img'
      >
        <img src={Images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={Images.circle}
          alt='profile_circle'
          className="overlay_circle"/>
      </motion.div>
     
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[Images.flutter, Images.redux, Images.sass].map((circle, index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header,"home");
