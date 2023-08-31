import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = ()=> {
  return (
    <div className='app__skills'>
      Skills
    </div>
  )
}

export default AppWrap(Skills, "skills", "container-bg");
