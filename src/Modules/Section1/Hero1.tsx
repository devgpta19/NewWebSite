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
                        <h1 className='hero1__title1'>
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
                        <h1 className='hero1__title2'>
                            {/* Tradylytics is the system for modern traders. */}
                            {/* Tradylytics empowers modern traders with intelligent insights. */}
                            {/* Tradylytics: Powering modern trading intelligence. */}
                            {/* Intelligent tools for modern traders. */}
                            {/* Modern trading powered by Tradylytics. */}

                            {/* Tradylytics empowers today's smart traders. */}

                            <span className='hero1__title2__span'>Tradylytics </span>
                            <span className='hero1__title2__span'>empowers </span>
                            <span className='hero1__title2__span'>today's </span>
                            <span className='hero1__title2__span'>smart </span>
                            <span className='hero1__title2__span'>traders.</span>
                        </h1>
                        <p className='hero1__description'>
                            Regular journaling helps you find the clear path to success.
                            <br />
                            Trade with clarity, Not Chaos.

                        </p>
                        <p className='hero1__description2'>
                            Focus on your trades. 
                            <br />
                            We'll handle the journaling, analysis, and insights.
                        </p>
                        <div className='hero1__buttons'>
                            <a className='hero1__buttons__primary'>Track Your Trades</a>
                            <a className='hero1__buttons__ghost'><span className='hero1__buttons__ghost__text'>Analyse your trades with AI</span> <span className='hero1__buttons__ghost__arrow'>→</span></a>
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
