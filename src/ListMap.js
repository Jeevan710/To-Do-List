import React from 'react'
import ListItems from './ListItems'

const ListMap = ({items,handleChange,handleDelete}) => {
  return (
    <ul>
        {items.map((i)=> (
            <ListItems i={i} key={i.id} handleChange={handleChange} handleDelete={handleDelete}/>
        ))}
    </ul> 
  )
}

export default ListMap