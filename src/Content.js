import React from 'react'
import ListMap from './ListMap'

const Content = ({items,handleChange,handleDelete}) => {

  return (
    <>

      {(items.length) ?  
          <ListMap items={items} handleChange={handleChange} handleDelete={handleDelete} /> :
          (<p>No items to display</p>)
      }
    </>
  )
}

export default Content