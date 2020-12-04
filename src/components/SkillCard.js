import React from 'react'

const SkillCard = ({ card }) => {
  return (
    <div className='card skillCard' style={{ width: '13rem', margin: '10px' }}>
      <img
        className='mx-auto my-2'
        style={{ maxHeight: '150px', width: `${card.style.imgWidth}` }}
        src={require(`../img/cards/${card.image}`)}
        alt='...'
      />
      <div className='card-body '>
        <h3 className='text-center'>{card.name}</h3>
      </div>
    </div>
  )
}

export default SkillCard
