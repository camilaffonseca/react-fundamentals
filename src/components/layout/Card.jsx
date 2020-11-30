import React from 'react'

import './Card.css'

const Card = ({ title, children, backgroundColor, contentBackgroundColor, textColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || 'rgb(7, 31, 51)',
    borderColor: backgroundColor || 'rgb(7, 31, 51)',
  }

  const cardContentStyle = {
    backgroundColor: contentBackgroundColor || 'rgb(36, 78, 112)',
    color: textColor || 'white',
  }

  return (
    <div className='Card' style={cardStyle}>
      <div className='Title'>{title}</div>
      <div className='Content' style={cardContentStyle}>
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  title: 'Title undefined',
}

export default Card
