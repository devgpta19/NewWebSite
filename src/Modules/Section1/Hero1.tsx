import React from 'react'
import './Scss/Hero1.scss';
import TiltedImage from './TiltedImage';
import Colab from './Colab';
import ThreeFeatures from './ThreeFeatures';

const Hero1: React.FC = () => {
    return (
        <div className='hero1'>
            <div className='hero1__container'>
                <div className='hero1__content'>
                    <div className='hero1__content__container'>
                        <h1 className='hero1__title'>
                            <span className='hero1__title__span'>Every </span>
                            <span className='hero1__title__span'>trade </span>
                            <span className='hero1__title__span'>teaches </span>
                            <span className='hero1__title__span'>you </span>
                            <span className='hero1__title__span'>something.</span>
                            <br />
                            {/* <span className='line-break'><br /></span> */}
                            <span className='hero1__title__span'>We </span>
                            <span className='hero1__title__span'>make </span>
                            <span className='hero1__title__span'>sure </span>
                            <span className='hero1__title__span'>you </span>
                            <span className='hero1__title__span'>learn </span>
                            <span className='hero1__title__span'>it.</span>
                        </h1>
                        <p className='hero1__description'>
                            Regular journaling helps you find the clear path to success.
                            <br />
                            Trade with clarity, Not Chaos.

                        </p>
                        <div className='hero1__buttons'>
                            <a className='hero1__buttons__primary'>Track Your Trades</a>
                            <a className='hero1__buttons__ghost'><span>Analyse with AI</span> <span>→</span></a>
                        </div>
                    </div>
                </div>

                <TiltedImage />

                <Colab />

                <ThreeFeatures />

            </div>
        </div>
    )
}

export default Hero1;
