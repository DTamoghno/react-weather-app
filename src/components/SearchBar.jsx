import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [input,setInput] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!input.trim()) return
    onSearch(input.trim());
    setInput('')
  };
  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input type="search" placeholder='Enter City Name' value={input} className='form-control me-2 bg-light' onChange={(e)=>setInput(e.target.value)} style={{color:'black'}} />
        <button className='btn btn-primary ' type='submit'>Search</button>
      </form>
    </>
  )
}

export default SearchBar