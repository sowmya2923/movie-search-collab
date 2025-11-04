import React from 'react'

export default function SearchBar({searchTerm, setSearchTerm}) {
  return (
    <div>
      <input type="text"
       placeholder="enter movie name" 
       value={searchTerm}
       onChange={(e)=> setSearchTerm(e.target.value)}
       style={{
        borderRadius:"10px",
        width:"40%",
        padding:"15px",
        fontSize:"1.2rem"
        }}/>
    </div>

  )
}