import React from 'react'
import Header from './Header';
import './WebsiteLayout.scss';
import Hero1 from '../Modules/Section1/Hero1';
import Hero2 from '../Modules/Section2/Hero2';

const WebsiteLayout: React.FC = () => {
  return (
    <div className='website-layout'>
      {/* <Header/> */}
      <Hero1/>
      <Hero2/>
    </div>
  )
}

export default WebsiteLayout;
