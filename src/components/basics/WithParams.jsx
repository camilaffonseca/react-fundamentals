import React from 'react'

export default function WithParams(props) {
  const status = props.note >= 7 ? 'approved' : 'disapproved'
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.student} with note {props.note} was {status}.
      </p>
    </div>
  )
}
