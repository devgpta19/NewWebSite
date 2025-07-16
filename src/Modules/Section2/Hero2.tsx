import React from 'react'
import './Scss/hero2.scss'
import TiltedImage2 from './TiltedImage2';
import ManagePortfolio from './ManagePortfolio';
import Ideate from './Ideate';
import FourQualities from './FourQualities';

const Hero2: React.FC = () => {
    return (
        <div className='hero2'>
            <div className='hero2__container'>
                <div className='hero2__content'>
                    <div className='hero2__content__container'>
                        <a className='hero2__link' href="#">
                            <span className='green-dot'></span>
                            Project and long-term planning
                            <span>→</span>
                        </a>

                        <h1 className='hero2__title'>
                            See your trading journey
                        </h1>

                        <p className='hero2__description'>
                            Understand where you're heading with a timeline that’s actually built for traders. <br />
                            <span className='hero2__description__span'>
                                From performance heatmaps to weekly win rates, Tradylytics lets you zoom in and out of your trading career like never before.
                            </span>
                        </p>
                    </div>
                </div>

                <div className='tilted-image2-parent'>
                    <TiltedImage2 />
                </div>

                <ManagePortfolio />

                <Ideate/>

                <FourQualities />

            </div>
        </div>
    )
}

export default Hero2;
