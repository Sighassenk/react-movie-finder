import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className={"search"}>
           <div>
               <img  src={"search.svg"} alt="search" />
               <input
                   type="text"
                   placeholder="Type your Movie Name"
               onChange={(e) => setSearchTerm(e.target.value)}/>
           </div>
        </div>
    )
}
export default Search
