import React from 'react'
import { useGlobalContext } from './context'

export const Search = () => {

  const {query, setQuery, isError, state} = useGlobalContext();

  return (
    <>
    {/* Use reducer hooks props from useFetch and reducer.js */}
    <h1 >{state.search.map( (cur) => {
      return <p key={cur.imdbID}>{cur.Title==="Raise the Titanic"? cur.Type: ""}</p>
    })}</h1>
  <section className='search-section'>
    <h2>Search Your Movie</h2>
    <form action="#"  onSubmit={ (e) => e.preventDefault()}>  
      <div>
        <input type="text" placeholder='search here' value={query} 
           onChange={ (e) => setQuery(e.target.value) }/>
      </div>
    </form>
    <div className='card-error'>
    <p>{isError.show && isError.msg}</p>
    </div>
  </section>

 
    </>
  )
}
