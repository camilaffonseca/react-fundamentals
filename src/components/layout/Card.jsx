import React from 'react'

import './Card.css'

const Card = ({title, children}) => {
    return (
        <div className='Card'>
            <div className='Title'>{title}</div>
            <div className='Content'>{children}</div>
        </div>
    )
}

Card.defaultProps = {
    title: 'Title undefined'
}

export default Card
