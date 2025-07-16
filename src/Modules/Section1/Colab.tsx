import React from 'react'
import './Scss/Colab.scss';

const Colab: React.FC = () => {
    return (
        <div className='colab'>
            <div className='colab__container'>
                <div className='colab__content'>
                    <h2 className='colab__title'>
                    Your trading, Your journey, Your broker
                    </h2>
                    <p className='colab__subtitle'>
                    Zero switching. Works with your current broker.
                    </p>
                </div>


                {/* AI neeche waala */}

                <div className="colab__logos-grid">
                    {/* Row 1 */}
                    <div className="colab__logo-item">
                        <div className="colab__logo-container">
                            <div className="colab__logo-icon colab__logo-cursor"></div>
                            <span className="colab__logo-text">CURSOR</span>
                        </div>
                    </div>

                    <div className="colab__logo-item">
                        <div className="colab__logo-container">
                            <div className="colab__logo-icon colab__logo-brex"></div>
                            <span className="colab__logo-text">Brex</span>
                        </div>
                    </div>

                    <div className="colab__logo-item">
                        <div className="colab__logo-container">
                            <div className="colab__logo-icon colab__logo-remote"></div>
                            <span className="colab__logo-text">remote</span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="colab__logo-item">
                        <div className="colab__logo-container">
                            <div className="colab__logo-icon colab__logo-arc"></div>
                            <span className="colab__logo-text">ARC</span>
                        </div>
                    </div>

                    <div className="colab__logo-item">
                        <div className="colab__logo-container">
                            <div className="colab__logo-icon colab__logo-runway"></div>
                            <span className="colab__logo-text">runway</span>
                        </div>
                    </div>

                    <div className="colab__logo-item">
                        <div className="colab__logo-container">
                            <div className="colab__logo-icon colab__logo-descript">
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                            </div>
                            <span className="colab__logo-text">descript</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Colab
