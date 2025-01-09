import React from 'react'
import LazyImage from './LazyImage'
import Youtube from '../assets/images/youtubefooter.png';
import Facebook from '../assets/images/facebookfooter.png';
import LinkedIn from '../assets/images/linkedInfooter.png';
import Twitter from '../assets/images/twitterfooter.png';

const Footer = () => {
  return (
    <div className='Footer_Container'>
      <div className='Footer_Container_Social'>
      <LazyImage src={Facebook} alt="Facebook" className="socialIcon" />
        <LazyImage src={Twitter} alt="Twitter" className="socialIcon" />
        <LazyImage src={LinkedIn} alt="LinkedIn" className="socialIcon" />
        <LazyImage src={Youtube} alt="Youtube" className="socialIcon" />
      </div>
      <div className='Footer_Container_Section'>
        <p className='Title'>Example@email.com</p>
        <p className='SubTitle'>Copyright © 2020 Name.All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer