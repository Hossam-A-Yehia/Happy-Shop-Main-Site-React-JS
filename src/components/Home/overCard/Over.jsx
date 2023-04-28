import React from 'react'
import  IMG from "../../../Image/over/over__1.png"
import  IMG2 from "../../../Image/over/over__2.png"
import  IMG3 from "../../../Image/over/over__3.png"
function Over() {
  return (
    <div >
      <div>
        <div className='d-flex align-items-center justify-content-center flex-wrap gap-2'>
          <img src={IMG}  style={{width:"400px"}} alt="" data-aos="zoom-in"/>
          <img src={IMG2} style={{width:"400px"}}  alt="" data-aos="zoom-in"/>
          <img src={IMG3} style={{width:"400px"}}  alt="" data-aos="zoom-in"/>
        </div>
      </div>
    </div>
  )
}

export default Over