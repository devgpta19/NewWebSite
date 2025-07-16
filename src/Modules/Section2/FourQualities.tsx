import React from 'react'
import './Scss/FourQualities.scss'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaRegGem } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { SiProgress } from "react-icons/si";

const qualities = [
    {
        title: 'Initiatives',
        description: 'Coordinate strategic product efforts.',
        icon: <FaRegLightbulb />,
    },
    {
        title: 'Cross-team projects',
        description: 'Collaborate across teams and departments.',
        icon: <RiTeamFill/>
    },
    {
        title: 'Milestones',
        description: 'Break projects down into concrete phases.',
        icon: <FaRegGem/>
    },
    {
        title: 'Progress insights',
        description: 'Track scope, velocity, and progress over time.',
        icon: <SiProgress/>
    },
]

const FourQualities: React.FC = () => {
    return (
        <div className='four-qualities'>
            <div className='four-qualities__container'>
                {qualities.map((item, index) => (
                    <div className='four-qualities__container__content' key={index}>
                        <div className='four-qualities__container__content__title'>
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                        <div className='four-qualities__container__content__description'>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FourQualities;
