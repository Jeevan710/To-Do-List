import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({addItem,setAddItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}> 
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus type='text' placeholder='Add Item' id='addItem' required value={addItem} onChange={(e)=>setAddItem(e.target.value)}></input>
        <button type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default AddItem