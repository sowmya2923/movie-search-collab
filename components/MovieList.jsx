import React, { useState ,useEffect } from 'react'
import moviesData from '../data.json'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
export default function MovieList() {
    const[movies,setMovies]=useState([])
    const[searchTerm,setSearchTerm]=useState("")
    const[selectedCategory,setSelectedCategory]=useState("")
    const[filteredMovies,setFilteredMovies]=useState([])
    useEffect(()=>{
        setMovies(moviesData)
        setFilteredMovies(moviesData)                     //useEffect lo data ni save chesukunnaru
    },[])
    useEffect(()=>{
      const newFiltered=movies.filter((i)=>{
        const matchMovieName=i.name.toLowerCase().includes(searchTerm.toLowerCase())
        console.log(selectedCategory)
        const matchSelectedcategory=selectedCategory? i.category===selectedCategory:true
        console.log(matchMovieName)
        return matchMovieName &&matchSelectedcategory
      })
      setFilteredMovies(newFiltered)
    },[searchTerm,selectedCategory,movies])

    const categories=[...new Set(movies.map((i)=>i.category))]
  return (
    <div>
      <h1>Movie Search App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CategoryFilter categories={categories}
      selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}/>                                                                     //parent nundi child ki velthayi properties.but ekkada malli child nundi parent ki  ravadaniki ela rasam */
     {
        filteredMovies.length===0?(
            <div>No movies found</div>
        ):(
            filteredMovies.map((i)=>(
                <div key={i.id}>
                    <h3>Title:{i.name}</h3>
                    <p>category:{i.category}</p>
                    <p>year:{i.year}</p>
                    </div>           
             ))

        )
      }
    </div>
  )
}
