import React from 'react'
import './Scss/Colab.scss';
import Groww from '../../assets/ColabImages/Groww.png';

const logos = [
    { imgSrc: Groww, comingsoon: "comingSoon" },
    { imgSrc: Groww, comingsoon: "comingSoon" },
    { imgSrc: Groww, comingsoon: "comingSoon" },
    { imgSrc: Groww, comingsoon: "comingSoon" },
    { imgSrc: Groww, comingsoon: "comingSoon" },
    { imgSrc: Groww, comingsoon: "comingSoon" },

];


const Colab: React.FC = () => {
    return (
        <div className='colab'>
            <div className='colab__container'>
                <div className='colab__container__content'>
                    <h2 className='colab__container__content__title title'>
                        Your trading, Your journey, Your broker
                    </h2>
                    <p className='colab__container__content__title subtitle'>
                        Zero switching. Works with your current broker.
                    </p>
                </div>


                <div className='colab__container__logo-grid'>
                    <div className='colab__container__logo-grid__logo-item'>
                        {logos.map(({ imgSrc, comingsoon }, index) => {
                            return (
                                <div className='colab__container__logo-grid__logo-item__logo-container' key={index}>
                                    <img src={imgSrc} alt={comingsoon} className='colab__container__logo-grid__logo-item__logo-container__logo-icon' />
                                    <span className='colab__container__logo-grid__logo-item__logo-container__logo-text'>{comingsoon}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>





                {/* <div className="colab__logo-grid">
                    {logo.map(({ name, iconClass }, index) => (
                        <div className="colab__logo-item" key={`${name}-${index}`}>
                            <div className="colab__logo-container" aria-label={`Logo of ${name}`} role="img">
                                <div className={`colab__logo-icon ${iconClass}`} />
                                <span className="colab__logo-text">{name}</span>
                            </div>
                        </div>
                    ))}
                </div> */}





            </div>
        </div>
    )
}

export default Colab
