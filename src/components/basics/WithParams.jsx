import React from 'react'

const WithParams = ({ note, title, student }) => {
  const status = note >= 7 ? 'approved' : 'disapproved'

  if(!student.length) {
    return <p>Student name has not been defined</p>
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>
        {student} with note {note} was {status}.
      </p>
    </div>
  )
}

WithParams.defaultProps = {
  note: 0,
  title: 'Title'
}

export default WithParams
