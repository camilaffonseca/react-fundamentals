import React, { cloneElement, Children } from 'react'

const Family = ({ children, ...props }) => (
  <div>{Children.map(children, (element, index) => cloneElement(element, { ...props, key: index }))}</div>
)

export default Family
