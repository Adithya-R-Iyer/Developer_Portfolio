import React from 'react'
import "./Navbar.scss"

import {Images} from  "../../constants"

export default function () {
  return (
   <nav>
    <div>
      <img src={Images.logo} alt="logo" />
    </div>
   </nav>
  )
}
