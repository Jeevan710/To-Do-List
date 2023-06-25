import React from 'react'

const SearchItem = ({searchItem,setSearchItem}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchItem'>Search Item</label>
        <input id='searchItem' type='text' placeholder='Search Item' required autoFocus value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}></input>
    </form>
  )
}

export default SearchItem