import React from 'react'

const SquareComponent = (props) => {

    const classes = props.className ? `${props.className} square` : 'square';
  return (
    <span className={classes} onClick={props.handleClick}>{props.value}</span>
  )
}

export default SquareComponent