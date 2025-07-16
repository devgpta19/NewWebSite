import React from 'react'
import './Scss/Ide\ate.scss'
import { CiFileOn } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";

const Ideate: React.FC = () => {
    return (
        <div className='ideate'>
            <div className='ideate__container'>
                <div className='ideate__container__content'>
                    <div className='ideate__container__content__left'>
                        <div className='ideate__container__content__left__description'>
                            <p className='ideate__container__content__left__description__title'>Ideate and specify <span className='line-break'><br /></span> what to build next</p>
                            <div className='ideate__container__content__left__description__ThreeOptions'>
                                <div className='ideate__container__content__left__description__ThreeOptions__option'>
                                    <a className='option option1' href="">
                                        <div className='green-line'></div>
                                        <p>Collaborative documents</p>
                                    </a>
                                    <a className='option option2' href="">
                                        <div className='green-line'></div>
                                        <p>Collaborative documents</p>
                                    </a>
                                    <a className='option option3' href="">
                                        <div className='green-line'></div>
                                        <p>Collaborative documents</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='ideate__container__content__bottom'>
                    <div className='ideate__container__content__right'>
                            <div className='ideate__container__content__right__inner'>
                                <div className='transparent-layer'></div>
                                <div className='ideate__container__content__right__inner__header'>
                                    <span className='icon'><CiFileOn /></span>
                                    <span>Spice harvester</span>
                                    <span className='icon'><RiArrowRightSLine /></span>
                                    <span>Project specs</span>
                                    <span>...</span>
                                </div>
                                <div className='ideate__container__content__right__inner__content'>
                                    <div className='ideate__container__content__right__inner__content__left'>
                                        <div className='line'></div>
                                        <div className='line'></div>
                                        <div className='line'></div>
                                        <div className='line'></div>
                                    </div>
                                    <div className="ideate__container__content__right__inner__content__right">
                                        <div className='OnlyContent'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ideate;
