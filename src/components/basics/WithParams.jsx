import React from 'react'

export default ({ note, title, student }) => {
  const status = note >= 7 ? 'approved' : 'disapproved'

  return (
    <div>
      <h2>{title}</h2>
      <p>
        {student} with note {note} was {status}.
      </p>
    </div>
  )
}
