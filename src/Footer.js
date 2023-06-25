import React from 'react'

const Footer = ({length}) => {

  return (
    <footer>
        You have {length} {length>1 ? "items" : "item" } to complete
    </footer>
  )
}

export default Footer