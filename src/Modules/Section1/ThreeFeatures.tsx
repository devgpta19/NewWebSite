import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import './Scss/ThreeFeatures.scss'

const ThreeFeatures: React.FC = () => {
    return (
        <div className='three-features'>
            <div className='three-features__container'>
                <div className='three-features__header'>
                    <div className='three-features__header__content'>
                        <div className='three-features__header__content__title'>
                            <h1 className='three-features__header__content__title__title'>
                                <span className='three-features__header__content__title__title__span'>Enter. </span>
                                <span className='three-features__header__content__title__title__span'>Exit. </span>
                                <span className='three-features__header__content__title__title__span'>Evaluate. </span>
                                <br />
                                {/* <span className='line-break'><br /></span> */}
                                <span className='three-features__header__content__title__title__span'>Like a Pro. </span>
                            </h1>
                        </div>
                        <div className='three-features__header__content__subtitle'>
                            <span>
                                Tradylytics is shaped by the habits, routines, and discipline of the best traders — from retail to pro. We focus on clarity, automation, and behavioral performance. <span className='last-words'> <a href="">
                                    Make the switch <span> <RiArrowRightSLine className='last-words__icon' />
                                    </span> </a> </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='three-features__content'>
                    <div className='three-features__content__item'>
                        <div className='three-features__content__item__card'>
                            <img src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" alt="" />
                            <div className='three-features__content__item__card__title'>
                                <h3>Auto-journaling made effortless</h3>
                                <button> + </button>
                            </div>
                        </div>
                        <div className='three-features__content__item__card'>
                            <img src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5a4ff140-41a2-42dd-0723-e14cccc3e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" alt="" />
                            <div className='three-features__content__item__card__title'>
                                <h3>Designed to make sense of your edge</h3>
                                <button> + </button>
                            </div>
                        </div>
                        <div className='three-features__content__item__card'>
                            <img src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0068f657-fe3f-47e9-6819-0ba9e6533900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" alt="" />
                            <div className='three-features__content__item__card__title'>
                                <h3>Crafted for deep reflection</h3>
                                <button> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeFeatures
