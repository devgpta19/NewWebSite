import React from 'react'
import './Scss/ManagePortfolio.scss';


// const portfolioCards = [
//   {
//     statusCount: 0,
//     statusLabel: 'On Track',
//     message: 'We are ready to launch next Thursday',
//     date: 'Sept 8',
//   },
//   {
//     statusCount: 0,
//     statusLabel: 'On Track',
//     message: 'We are ready to launch next Thursday',
//     date: 'Sept 8',
//   },
//   {
//     statusCount: 0,
//     statusLabel: 'On Track',
//     message: 'We are ready to launch next Thursday',
//     date: 'Sept 8',
//   },
// ]


const ManagePortfolio: React.FC = () => {
  return (
    <div className='manage-portfolio'>
      <div className='manage-portfolio__container'>
        <div className='manage-portfolio__container__content content1'>
          <p className='manage-portfolio__container__content__title'>Manage your portfolio end-to-end</p>
          <p className='manage-portfolio__container__content__description'>Consolidate specs, milestones, tasks, and other <span className='break'><br /></span> documentation in one centralized location.</p>
          <div className='manage-portfolio__container__content__Portfolio'>
            <div className='manage-portfolio__container__content__Portfolio__card'>

            </div>
          </div>
        </div>
        <div className='manage-portfolio__container__content content2'>
          <p className='manage-portfolio__container__content__title'>
            Manage your portfolio end-to-end
          </p>
          <p className='manage-portfolio__container__content__description'>
            Consolidate specs, milestones, tasks, and other{' '}
            <span className='break'>
              <br />
            </span>
            documentation in one centralized location.
          </p>

          {/* <div className='manage-portfolio__container__content__ThreeCards'>
            {portfolioCards.map((card, index) => (
              <div
                className={`manage-portfolio__container__content__ThreeCards__card card${index + 1}`}
                key={index}
              >
                <div className='manage-portfolio__container__content__ThreeCards__card__content'>
                  <div className='i'>
                    <span>{card.statusCount}</span>
                    <span>{card.statusLabel}</span>
                  </div>
                  <p>{card.message}</p>
                  <p className='date'>{card.date}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ManagePortfolio
