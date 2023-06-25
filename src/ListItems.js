import React from 'react'
import {FaTrash} from "react-icons/fa";

const ListItems = ({i,handleChange,handleDelete}) => {
  return (
    <li className='item'>
        <input type='checkbox' checked={i.checked} onChange={()=>handleChange(i.id)}></input>
        <label onDoubleClick={()=>handleChange(i.id)} style={(i.checked) ? {textDecoration:'line-through'}:null}>{i.item}</label>
        <FaTrash role='button' onClick={()=>handleDelete(i.id)}/>
    </li>
  )
}

export default ListItems